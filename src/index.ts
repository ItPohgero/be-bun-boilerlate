import cors from "@elysiajs/cors";
import swagger from "@elysiajs/swagger";
import { Elysia, t } from "elysia";
import { Runner } from "../runner";
import { HandlerHealth } from "./app/handler/health";
import { Cronjob } from "./pkg/cron/main";
import { SendMail } from "./pkg/mail/send";
import { TemplateEmailRegister } from "./pkg/mail/temp/register";
import r_auth from "./router/http/auth";
import r_user from "./router/http/user";
import w_message from "./router/websocket/message";

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
	.get("/", ({ store: { version } }) => HandlerHealth.Main({ version }))
	.post("/send-email", async () => {
		return await SendMail({
			from: "Wahyu Agus Arifin <onboarding@resend.dev>",
			to: ["itpohgero@gmail.com"],
			subject: "Email testing",
			body: "text",
			react: TemplateEmailRegister({ name: "Wahyu" }),
		});
	})
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
