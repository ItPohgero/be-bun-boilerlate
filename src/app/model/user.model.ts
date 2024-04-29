import { prisma } from "../../pkg/prisma/main"
import { SchemaAuthSignUpType } from "../schema/auth";

export const UserModel = {
    GetAll: () => {
        try {
            const resp = prisma.user.findMany()
            return resp
        } catch (error) {
            console.log(error);
        }
    },
    Create: async (payload: SchemaAuthSignUpType) => {
        try {
            const passwordHash = await Bun.password.hash(payload?.password, {
                algorithm: "bcrypt",
                cost: 11,
            });
            prisma.user.create({
                data: {
                    name: payload?.name,
                    email: payload?.email,
                    password: passwordHash
                }
            })
            return {
                name: payload?.name,
                email: payload?.email,
            }
        } catch (error) {
            console.log(error);
        }
    },
}