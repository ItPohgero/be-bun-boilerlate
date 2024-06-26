import type { AuthType, JwtType } from "../../types/jwt";
import { Status200, Status400, Status500 } from "../../utils/response";
import {
	type UMFindOneWithEmailRes,
	UserModel,
	type UserModelCreateResponse,
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
			const resp: UMFindOneWithEmailRes | null =
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
					return Status200({
						data: {
							token: auth.value,
						},
					});
				}
				return Status400({ data: "Email or Password Wrong" });
			}
			return Status400({ data: "Email or Password Wrong" });
		} catch (error) {
			return Status500();
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
			return Status200({
				data: {
					token: auth.value,
				},
			});
		} catch (error) {
			return Status500();
		}
	},
	Profile: async (data: unknown) => {
		return Status200({ data });
	},
};
