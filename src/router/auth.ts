import { Elysia } from "elysia";
import { SchemaAuthSignIn } from "../app/schema/auth";
import { HandlerAuth } from "../app/handler/auth";

const r_auth = new Elysia({ prefix: '/auth' })
    .onBeforeHandle(({ set }) => {
        console.log(set);
    })
    .post('/sign-in', ({ body }) => HandlerAuth.SignIn(body), SchemaAuthSignIn)
    .post('/sign-up', () => 'Sign up')
    .get('/profile', () => 'profile')

export default r_auth