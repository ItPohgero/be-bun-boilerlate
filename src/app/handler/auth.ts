import { AuthType, JwtType } from "../../types/jwt"
import { SchemaAuthSignInType } from "../schema/auth"

type SignInPayload = {
    dto: SchemaAuthSignInType
    jwt: JwtType
    auth: AuthType['auth']
}
type SignUpPayload = {
    dto: SchemaAuthSignInType
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
    }
}