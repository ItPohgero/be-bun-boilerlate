import { Elysia } from "elysia";
import { HandlerHealth } from "./app/handler/health";
import r_user from "./router/user";
import r_auth from "./router/auth";

const app = new Elysia()
  .get("/", HandlerHealth.Main())
  .use(r_auth)
  .use(r_user)

  .listen(Bun.env.PORT ?? 3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
