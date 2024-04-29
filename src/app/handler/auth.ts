import { AuthType, JwtType } from "../../types/jwt"
import { Status200Authorize, Status400 } from "../../utils/response"
import { UserModel } from "../model/user.model"
import { SchemaAuthSignInType, SchemaAuthSignUpType } from "../schema/auth"

type SignInPayload = {
    dto: SchemaAuthSignInType
    jwt: JwtType
    auth: AuthType['auth']
}
type SignUpPayload = {
    dto: SchemaAuthSignUpType
    jwt: JwtType
    auth: AuthType['auth']
}

export const HandlerAuth = {
    SignIn: async (payload: SignInPayload) => {
        const { dto, auth, jwt } = payload
        try {
            const resp: any = await UserModel.FindOneWithEmail(dto?.email)
            const isMatch = Bun.password.verifySync(dto?.password, resp?.password);            
            if (isMatch) {
                auth.set({
                    value: await jwt.sign(dto),
                    httpOnly: true,
                    maxAge: 7 * 86400,
                    path: '/',
                })
                return Status200Authorize({
                    data: {
                        token: auth.value
                    }
                })
            } else {
                return Status400({ data: "Email or Password Wrong" })
            }
        } catch (error) {
            console.log(error);
        }
    },
    SignUp: async (payload: SignUpPayload) => {
        const { dto, auth, jwt } = payload
        try {
            const resp: any = await UserModel.Create(dto)
            auth.set({
                value: await jwt.sign(resp),
                httpOnly: true,
                maxAge: 7 * 86400,
                path: '/',
            })
            return Status200Authorize({
                data: {
                    token: auth.value
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
}