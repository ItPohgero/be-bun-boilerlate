import Elysia from "elysia";
import { TemplateEmailRegister } from "../../pkg/mail/temp/register";
import { SendMail } from "../../pkg/mail/send";

const r_mail = new Elysia({ prefix: "/mail" }).post("/send-email", async () => {
	const template = await TemplateEmailRegister({ name: "Wahyu" });
	return await SendMail({
		from: "Wahyu Agus Arifin <onboarding@resend.dev>",
		to: ["itpohgero@gmail.com"],
		subject: "Email testing",
		body: "text",
		react: template,
	});
});

export default r_mail;
