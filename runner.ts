import figlet from "figlet";

type IPO = {
	hostname: string;
	port: number;
};
export const Runner = (i: IPO) => {
	console.log(figlet.textSync(Bun.env.CREDIT ?? ""));
	console.log("Author :", Bun.env.AUTHOR);
	console.log(`Running at ${i.hostname}:${i.port}`);
};
