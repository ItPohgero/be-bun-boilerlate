import Elysia, { t } from "elysia";
import { html } from "@elysiajs/html";
import { OTP, VerifyOTP } from "../../pkg/authenticator/totp";
import { Status200 } from "../../utils/response";
import { QRImage } from "../../utils/qrcode";

const r_otp = new Elysia({ prefix: "/view" })
	.use(html())
	.get("/get-otp", async () => {
		const { uri } = OTP({ screet: "varra" });
		const svg = await QRImage(uri);
		return Status200({
			data: {
				uri,
				svg,
			},
		});
	})
	.post(
		"check-otp",
		async ({ body }) => {
			const { isValid, currentToken } = VerifyOTP({
				screet: "varra",
				enteredPin: body?.pin,
			});
			console.log(isValid, currentToken);
			return isValid;
		},
		{
			body: t.Object({
				pin: t.String(),
			}),
		},
	);

export default r_otp;
