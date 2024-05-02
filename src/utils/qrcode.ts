import QRCode from "qrcode";
export async function QRImage(value: string) {
	return await QRCode.toString(value, {
		type: "svg",
	});
}
