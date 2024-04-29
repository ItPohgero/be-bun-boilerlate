import { Elysia } from "elysia";
import { HandlerHealth } from "./app/handler/health";
import r_user from "./router/user";
import r_auth from "./router/auth";

const app = new Elysia()
  .state('version', Bun.env.VERSION ?? "0.0.0")
  .get("/", ({ store: { version } }) => HandlerHealth.Main({ version }))
  .use(r_auth)
  .use(r_user)

  .listen(Bun.env.PORT ?? 3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
