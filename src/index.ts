import { Elysia, t } from "elysia";
import { HandlerHealth } from "./app/handler/health";
import r_user from "./router/user";
import r_auth from "./router/auth";
import cors from "@elysiajs/cors";
import { Cronjob } from "./pkg/cron/main";
import swagger from "@elysiajs/swagger";
import { ITPOHGERO } from "../itpohgero";

const app = new Elysia()
  .state('version', Bun.env.VERSION ?? "0.0.0")
  .use(swagger({
    documentation: {
      info: {
        title: 'itpohgero',
        version: Bun.env.VERSION ?? "0.0.0"
      }
    }
  }))
  .get("/", ({ store: { version } }) => HandlerHealth.Main({ version }))
  .use(r_auth)
  .use(r_user)
  .use(cors())
  .use(Cronjob.Main())
  .listen(Bun.env.PORT ?? 3000);
  
ITPOHGERO(app)