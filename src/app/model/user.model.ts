import { prisma } from '../../pkg/prisma/main'
import { SchemaAuthSignUpType } from '../schema/auth'

export const UserModel = {
    GetAll: async () => {
        try {
            const resp = await prisma.user.findMany()
            return resp
        } catch (error) {
            console.log(error)
        }
    },
    FindOneWithEmail: async (email: string) => {
        try {
            const resp = await prisma.user.findFirst({
                where: {
                    email: email,
                },
            })
            return resp
        } catch (error) {
            console.log(error)
        }
    },
    Create: async (payload: SchemaAuthSignUpType) => {
        try {
            const passwordHash = await Bun.password.hashSync(payload?.password)
            await prisma.user.create({
                data: {
                    name: payload?.name,
                    email: payload?.email,
                    password: passwordHash,
                },
            })
            return {
                name: payload?.name,
                email: payload?.email,
            }
        } catch (error) {
            console.log(error)
        }
    },
}
