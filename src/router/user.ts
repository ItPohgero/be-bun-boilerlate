import Elysia from "elysia";

const r_user = new Elysia({ prefix: '/main' })
    .get('/dashboard', () => 'Sign in')

export default r_user