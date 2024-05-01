import figlet from "figlet";

type IPO = {
	hostname: string;
	port: number;
};
export const Runner = (i: IPO) => {
	console.log(figlet.textSync(Bun.env.CREDIT ?? ""));
	const data = [
		{ key: "Host", value: i?.hostname },
		{ key: "Port", value: i?.port },
		{ key: "Env", value: Bun.env.ENV },
		{ key: "Author", value: Bun.env.AUTHOR },
		{ key: "Credit", value: Bun.env.CREDIT },
	];
	console.table(data);
	console.log(`Running at ${i.hostname}:${i.port}`);
};
