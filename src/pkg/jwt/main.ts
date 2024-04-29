import { JwtType } from "../../types/jwt"

export const JWT = {
    Authorized: async ({ jwt, bearer, set }: { jwt: JwtType, bearer: string | undefined, set: any }) => {
        const auth = await jwt.verify(bearer)
        if (!auth) {
            set.status = 401
            return 'Unauthorized'
        }
    }
}