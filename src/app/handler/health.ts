import Elysia, { type RouteSchema } from "elysia";
import { logger } from "../../pkg/log/main";

export const HandlerHealth = {
	Main: ({ version }: { version: string }) => {
		// ({ store: { version } }) => HandlerHealth.Main({ version })
		return {
			Framework: Elysia.name,
			BunVersion: Bun.version,
			AppVersion: version,
		};
	},
	Test: ({ params }: RouteSchema) => {
		logger.info(params);
		logger.error(params);
		logger.warn(params);
	},
};
