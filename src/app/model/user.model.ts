import { prisma } from "../../pkg/prisma/main"

export const UserModel = {
    GetAll : () => {
        const resp = prisma.user.findMany()
        return resp
    }
}