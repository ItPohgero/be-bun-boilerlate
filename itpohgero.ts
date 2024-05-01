import figlet from "figlet";

export const ITPOHGERO = () => {
	console.log(figlet.textSync(Bun.env.CREDIT ?? ""));
	console.log("Author :", Bun.env.AUTHOR);
};
