import * as OTPAuth from "otpauth";
import { logger } from "../log/main";

type OTPType = {
	screet: string;
};

export const OTP = (data: OTPType) => {
	const totp = new OTPAuth.TOTP({
		issuer: Bun.env.TOTP_ISSUER,
		label: Bun.env.TOTP_LABEL,
		algorithm: "SHA1",
		digits: 6,
		period: 30,
		secret: OTPAuth.Secret.fromBase32(data?.screet ?? "screet"),
	});

	// Generate a token (returns the current token as a string).
	const token = totp.generate();

	// Validate a token (returns the token delta or null if it is not found in the search window, in which case it should be considered invalid).
	const delta = totp.validate({ token, window: 1 });

	// Convert to Google Authenticator key URI:
	// otpauth://totp/ACME:AzureDiamond?issuer=ACME&secret=NB2W45DFOIZA&algorithm=SHA1&digits=6&period=30
	const uri = totp.toString(); // or 'OTPAuth.URI.stringify(totp)'
	// Convert from Google Authenticator key URI.
	// const totp: any = OTPAuth.URI.parse(uri);
	// logger.info(totp)

	return { uri, delta };
};

type VerifyOTPType = {
	enteredPin: string;
	screet: string;
};
export const VerifyOTP = (data: VerifyOTPType) => {
	const totp = new OTPAuth.TOTP({
		issuer: Bun.env.TOTP_ISSUER,
		label: Bun.env.TOTP_LABEL,
		algorithm: "SHA1",
		digits: 6,
		period: 30,
		secret: OTPAuth.Secret.fromBase32(data?.screet),
	});

	// Generate the current OTP for comparison
	const currentToken = totp.generate();
	// Validate the entered PIN against the current token
	const isValid = totp.validate({ token: data?.enteredPin, window: 1 });
	// Return verification result
	return { isValid, currentToken }; // Optionally include currentToken for informational purposes
};
