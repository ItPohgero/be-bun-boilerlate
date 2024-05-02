import cors from "@elysiajs/cors";
import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";
import { Runner } from "../runner";
import { HandlerHealth } from "./app/handler/health";
import { Cronjob } from "./pkg/cron/main";
import r_auth from "./router/http/auth";
import r_user from "./router/http/user";
import w_message from "./router/websocket/message";
import v_auth from "./router/view/auth";
import r_mail from "./router/http/mail";

const app = new Elysia()
	.state("version", Bun.env.VERSION ?? "0.0.0")
	.use(
		swagger({
			documentation: {
				info: {
					title: "itpohgero",
					version: Bun.env.VERSION ?? "0.0.0",
				},
			},
		}),
	)
	.get("/", HandlerHealth.Main)
	.get("/totp", HandlerHealth.Totp)
	.get("/test/:id", HandlerHealth.Test)
	.use(v_auth)
	.use(r_mail)
	.use(r_auth)
	.use(r_user)
	.use(w_message)
	.use(cors())
	.use(Cronjob.Main())
	.listen(Bun.env.PORT ?? 3000);

Runner({
	hostname: app.server?.hostname ?? "",
	port: app.server?.port ?? 0,
});
