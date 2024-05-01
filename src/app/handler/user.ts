import { prisma } from "../../pkg/prisma/main";
import { Status200 } from "../../utils/response";

export const HandlerUser = {
	GetAll: async () => {
		try {
			const resp = await prisma.user.findMany();
			return Status200({ data: resp });
		} catch (error) {
			console.log(error);
		}
	},
};
