import figlet from "figlet";

export const ITPOHGERO = (log: string) => {
	console.log(figlet.textSync(Bun.env.CREDIT ?? ""));
	console.log("Author :", Bun.env.AUTHOR);
	console.log(log);
};
