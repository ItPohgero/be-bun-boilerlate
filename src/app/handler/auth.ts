import { SchemaAuthSignInType } from "../schema/auth"

export const HandlerAuth = {
    SignIn: (dto: SchemaAuthSignInType) => {
        return {
            "mail": dto.email
        }
    }
}