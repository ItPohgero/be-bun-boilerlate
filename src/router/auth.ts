import { Elysia } from "elysia";
import { SchemaAuthSignIn } from "../app/schema/auth";
import { HandlerAuth } from "../app/handler/auth";
import { jwt } from '@elysiajs/jwt'

const r_auth = new Elysia({ prefix: '/auth' })
    .use(
        jwt({
            name: 'jwt',
            secret: Bun.env.JWTSECRET ?? "xxx"
        })
    )
    .onBeforeHandle((e) => {
        console.log(e);
    })
    .post('/sign-in', async ({ jwt, cookie: { auth }, body }) => {
        return HandlerAuth.SignIn({
            jwt,
            auth,
            dto: body,
        })
    }, SchemaAuthSignIn)
    .post('/sign-up', () => 'Sign up')
    .get('/profile', () => 'profile')

export default r_auth