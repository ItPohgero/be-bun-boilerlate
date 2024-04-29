import { Elysia } from "elysia";
import { HandlerHealth } from "./app/handler/health";

const app = new Elysia()
  .get("/", HandlerHealth.Main())
  .listen(Bun.env.PORT ?? 3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
