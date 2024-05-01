import { prisma } from "../../pkg/prisma/main";
import type { SchemaAuthSignUpType } from "../schema/auth";

export type UserModelGetAllResponse = {
	id: number;
	email: string;
	name: string;
	password: string;
};

export type UMFindOneWithEmailRes = {
	id: number;
	email: string;
	name: string;
	password: string;
};

export type UserModelCreateResponse = {
	email: string;
	name: string;
};

export const UserModel = {
	GetAll: async (): Promise<UserModelGetAllResponse[]> => {
		try {
			return await prisma.user.findMany();
		} catch (error) {
			console.log(error);
			throw error;
		}
	},
	FindOneWithEmail: async (
		email: string,
	): Promise<UMFindOneWithEmailRes | null> => {
		try {
			return await prisma.user.findFirst({
				where: {
					email: email,
				},
			});
		} catch (error) {
			console.log(error);
			throw error;
		}
	},
	Create: async (
		payload: SchemaAuthSignUpType,
	): Promise<UserModelCreateResponse> => {
		try {
			const passwordHash = Bun.password.hashSync(payload?.password);
			await prisma.user.create({
				data: {
					name: payload?.name,
					email: payload?.email,
					password: passwordHash,
				},
			});
			return {
				name: payload?.name,
				email: payload?.email,
			};
		} catch (error) {
			console.log(error);
			throw error;
		}
	},
};
