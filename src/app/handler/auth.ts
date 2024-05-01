import type { AuthType, JwtType } from "../../types/jwt";
import { Status200, Status200Authorize, Status400 } from "../../utils/response";
import {
	UserModel,
	type UserModelCreateResponse,
	type UserModelFindOneWithEmailResponse,
} from "../model/user.model";
import type {
	SchemaAuthSignInType,
	SchemaAuthSignUpType,
} from "../schema/auth";

type SignInPayload = {
	dto: SchemaAuthSignInType;
	jwt: JwtType;
	auth: AuthType["auth"];
};
type SignUpPayload = {
	dto: SchemaAuthSignUpType;
	jwt: JwtType;
	auth: AuthType["auth"];
};

export const HandlerAuth = {
	SignIn: async (payload: SignInPayload) => {
		const { dto, auth, jwt } = payload;
		try {
			const resp: UserModelFindOneWithEmailResponse | null =
				await UserModel.FindOneWithEmail(dto?.email);
			if (resp) {
				const isMatch = Bun.password.verifySync(dto?.password, resp?.password);
				if (isMatch) {
					auth.set({
						value: await jwt.sign(dto),
						httpOnly: true,
						maxAge: 7 * 86400,
						path: "/",
					});
					return Status200Authorize({
						data: {
							token: auth.value,
						},
					});
				}
				return Status400({ data: "Email or Password Wrong" });
			}
			return Status400({ data: "Email or Password Wrong" });
		} catch (error) {
			console.log(error);
		}
	},
	SignUp: async (payload: SignUpPayload) => {
		const { dto, auth, jwt } = payload;
		try {
			const resp: UserModelCreateResponse = await UserModel.Create(dto);
			auth.set({
				value: await jwt.sign(resp),
				httpOnly: true,
				maxAge: 7 * 86400,
				path: "/",
			});
			return Status200Authorize({
				data: {
					token: auth.value,
				},
			});
		} catch (error) {
			console.log(error);
		}
	},
	Profile: async (data: unknown) => {
		return Status200({ data });
	},
};
