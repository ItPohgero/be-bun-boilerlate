import { Elysia } from "elysia";
import { SchemaAuthSignIn } from "../app/schema/auth";

const r_auth = new Elysia({ prefix: '/auth' })
    .onBeforeHandle(({ set }) => {
        console.log(set);
    })
    .post('/sign-in', () => 'Sign in', SchemaAuthSignIn)
    .post('/sign-up', () => 'Sign up')
    .get('/profile', () => 'profile')

export default r_auth