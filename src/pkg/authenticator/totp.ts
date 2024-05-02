import * as OTPAuth from "otpauth";

type OTPType = {
	issuer: string;
	label: string;
	screet: string;
};

export const OTP = (data: OTPType) => {
	const totp = new OTPAuth.TOTP({
		issuer: data?.issuer ?? "APP",
		label: data?.label ?? "itpohgero",
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
};
