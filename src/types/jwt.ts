import type { JWTPayloadSpec } from "@elysiajs/jwt";
import type { Cookie } from "elysia";

export type JwtType = {
	sign: (
		morePayload: Record<string, string | number> & JWTPayloadSpec,
	) => Promise<string>;
	verify: (jwt?: string | undefined) => Promise<unknown>;
};

export type AuthType = {
	auth: Cookie<unknown>;
};
