import { JWTPayloadSpec } from "@elysiajs/jwt";
import { Cookie } from "elysia";

export type JwtType = {
	sign: (
		morePayload: Record<string, string | number> & JWTPayloadSpec,
	) => Promise<string>;
	verify: (jwt?: string | undefined) => Promise<any>;
};

export type AuthType = {
	auth: Cookie<any>;
};
