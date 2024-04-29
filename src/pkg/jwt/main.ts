import { JwtType } from "../../types/jwt"

export const JWT = {
    Authorized: async ({ jwt, bearer}: { jwt: JwtType, bearer: string | undefined }) => {
        return await jwt.verify(bearer)
    }
}