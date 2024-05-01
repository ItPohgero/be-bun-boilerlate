import figlet from "figlet";

export const ITPOHGERO = (app: any) => {
	console.log(`Running at ${app.server?.hostname}:${app.server?.port}`);
	console.log(figlet.textSync(Bun.env.CREDIT ?? ""));
	console.log("Author :", Bun.env.AUTHOR);
};
