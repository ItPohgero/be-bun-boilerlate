import type React from "react";
import { Resend } from "resend";

const resend = new Resend(Bun.env.RESEND_API_KEY);

type SendMailType = {
	from: string;
	to: string[];
	subject: string;
	body: "text" | "react";
	text?: string;
	react?: React.ReactNode;
};

export const SendMail = async (props: SendMailType) => {
	const {
		from = "Wahyu Agus Arifin <onboarding@resend.dev>",
		to,
		subject,
		body,
		text,
		react,
	} = props;
	if (body === "text") {
		const data = await resend.emails.send({
			from,
			to,
			subject,
			text: text ?? "",
		});
		return new Response(JSON.stringify(data));
	}
	const data = await resend.emails.send({
		from,
		to,
		subject,
		react: react ?? "",
	});
	return new Response(JSON.stringify(data));
};
