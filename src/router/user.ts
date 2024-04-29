import Elysia from "elysia";

const r_user = new Elysia({ prefix: '/main' })
    .derive(({ headers }) => {
        const auth = headers['authorization']
        return {
            bearer: auth?.startsWith('Bearer ') ? auth.slice(7) : null
        }
    })
    .get('/dashboard', (e) => e)

export default r_user