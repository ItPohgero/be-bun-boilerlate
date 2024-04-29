import Elysia from "elysia";
import { HandlerUser } from "../app/handler/user";
import bearer from "@elysiajs/bearer";
import jwt from "@elysiajs/jwt";
import { JWT } from "../pkg/jwt/main";
import { Status401 } from "../utils/response";

const r_user = new Elysia({ prefix: '/main' })
    .use(
        jwt({
            name: 'jwt',
            secret: Bun.env.JWTSECRET ?? "xxx"
        })
    )
    .use(bearer())
    .get('/users', async ({ jwt, set, bearer }) => {
        // const auth = await JWT.Authorized({ jwt, bearer })
        // if (!auth) {
        //     set.status = 401
        //     return Status401()
        // }
        return HandlerUser.GetAll()
    })

export default r_user