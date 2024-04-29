import { Elysia } from "elysia";
import { SchemaAuthSignIn } from "../app/schema/auth";
import { HandlerAuth } from "../app/handler/auth";
import { jwt } from '@elysiajs/jwt'
import { bearer } from '@elysiajs/bearer'

const r_auth = new Elysia({ prefix: '/auth' })
    .use(
        jwt({
            name: 'jwt',
            secret: Bun.env.JWTSECRET ?? "xxx"
        })
    )
    .use(bearer())
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
    .get('/profile', async ({ jwt, set, bearer }) => {
        const profile = await jwt.verify(bearer)
        if (!profile) {
            set.status = 401
            return 'Unauthorized'
        }

        return `Hello ${profile.email}`
    })


export default r_auth