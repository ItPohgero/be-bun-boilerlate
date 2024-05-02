import Elysia from "elysia";
import { html } from "@elysiajs/html";
import ViewLogin from "../../view/ViewLogin";

const v_auth = new Elysia({ prefix: "/view" }).use(html()).get("/login", () => {
	return ViewLogin({ qrcode: "sf" });
});

export default v_auth;
