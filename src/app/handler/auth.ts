import { AuthType, JwtType } from "../../types/jwt"
import { Status200, Status201 } from "../../utils/response"
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
        auth.set({
            value: await jwt.sign(dto),
            httpOnly: true,
            maxAge: 7 * 86400,
            path: '/',
        })
        return {
            ...dto,
            token: auth.value
        }
    },
    SignUp: async (payload: SignUpPayload) => {
        const { dto, auth, jwt } = payload
        const resp: any = await UserModel.Create(dto)
        auth.set({
            value: await jwt.sign(resp),
            httpOnly: true,
            maxAge: 7 * 86400,
            path: '/',
        })
        return Status201({
            data: {
                ...resp,
                token: auth.value
            }
        })
    }
}