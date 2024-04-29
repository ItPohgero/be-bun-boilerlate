import { prisma } from "../../pkg/prisma/main"

export const HandlerUser = {
    GetAll: async () => {
        const resp = prisma.user.findMany()
        return resp
    }
}