import { prisma } from "../../pkg/prisma/main"

export const HandlerUser = {
    GetAll: async () => {
        return await prisma.user.findMany()
    }
}