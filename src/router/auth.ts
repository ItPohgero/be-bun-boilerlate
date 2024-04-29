import Elysia from "elysia";

const r_auth = new Elysia({ prefix: '/auth' })
    .onBeforeHandle(({ set }) => {
        console.log(set);
    })
    .post('/sign-in', () => 'Sign in')
    .post('/sign-up', () => 'Sign up')
    .get('/profile', () => 'profile')

export default r_auth