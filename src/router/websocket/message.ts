import { Elysia, t } from 'elysia'

const w_message = new Elysia({
    prefix: '/ws',
    websocket: {
        idleTimeout: 30
    }
})
    .ws('/chat', {
        body: t.Object({
            message: t.String()
        }),
        message(ws, { message }) {
            ws.send({
                message,
                time: Date.now()
            })
        }
    })

export default w_message
