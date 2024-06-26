import {
	Body,
	Container,
	Head,
	Heading,
	Html,
	Preview,
	Text,
} from "@react-email/components";
import * as React from "react";

interface WaitlistEmailProps {
	name: string;
}

export const TemplateEmailRegister = ({ name }: WaitlistEmailProps) => (
	<Html>
		<Head />
		<Preview>Thank you for joining our waitlist and for your patience</Preview>
		<Body style={main}>
			<Container style={container}>
				<Heading style={h1}>Coming Soon.</Heading>
				<Text style={text}>
					Thank you {name} for joining our waitlist and for your patience. We
					will send you a note when we have something new to share.
				</Text>
			</Container>
		</Body>
	</Html>
);

const main = {
	backgroundColor: "#000000",
	margin: "0 auto",
};

const container = {
	margin: "auto",
	padding: "96px 20px 64px",
};

const h1 = {
	color: "#ffffff",
	fontSize: "24px",
	fontWeight: "600",
	lineHeight: "40px",
	margin: "0 0 20px",
};

const text = {
	color: "#aaaaaa",
	fontSize: "14px",
	lineHeight: "24px",
	margin: "0 0 40px",
};
