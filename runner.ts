import figlet from "figlet";

type IPO = {
	hostname: string;
	port: number;
};
export const Runner = (i: IPO) => {
	console.log(figlet.textSync(Bun.env.CREDIT ?? ""));
	const data = [
		{ key: "Host", desc: i?.hostname },
		{ key: "Port", desc: i?.port },
		{ key: "Env", desc: Bun.env.ENV },
		{ key: "Author", desc: Bun.env.AUTHOR },
		{ key: "Credit", desc: Bun.env.CREDIT },
	];
	console.table(data, ["key", "desc"]);
	console.log(`Running at ${i.hostname}:${i.port}`);
};
