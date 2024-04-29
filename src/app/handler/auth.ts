import { AuthType, JwtType } from "../../types/jwt"
import { SchemaAuthSignInType } from "../schema/auth"

type SignPayload = {
    dto: SchemaAuthSignInType
    jwt: JwtType
    auth: AuthType['auth']
}

export const HandlerAuth = {
    SignIn: async (payload: SignPayload) => {
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