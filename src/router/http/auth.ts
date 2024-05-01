import { bearer } from "@elysiajs/bearer";
import { jwt } from "@elysiajs/jwt";
import { Elysia } from "elysia";
import { HandlerAuth } from "../../app/handler/auth";
import { SchemaAuthSignIn, SchemaAuthSignUp } from "../../app/schema/auth";
import { Status401 } from "../../utils/response";

const r_auth = new Elysia({ prefix: "/auth" })
	.use(
		jwt({
			name: "jwt",
			secret: Bun.env.JWTSECRET ?? "xxx",
		}),
	)
	.use(bearer())
	.onBeforeHandle((e) => {
		// console.log(e)
	})
	.post(
		"/sign-in",
		async ({ jwt, cookie: { auth }, body }) => {
			return HandlerAuth.SignIn({
				jwt,
				auth,
				dto: body,
			});
		},
		SchemaAuthSignIn,
	)
	.post(
		"/sign-up",
		async ({ jwt, cookie: { auth }, body }) => {
			return HandlerAuth.SignUp({
				jwt,
				auth,
				dto: body,
			});
		},
		SchemaAuthSignUp,
	)
	.get("/profile", async ({ jwt, set, bearer }) => {
		const auth = await jwt.verify(bearer);
		if (!auth) {
			set.status = 401;
			return Status401();
		}
		return HandlerAuth.Profile(auth);
	});

export default r_auth;
