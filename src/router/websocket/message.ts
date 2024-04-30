import { Elysia } from 'elysia'

const w_message = new Elysia({ prefix: '/ws' })
    .ws('/chat', {
        message(ws, message) {
            ws.send({
                "message": message,
                "status": "ok"
            })
        }
    })

export default w_message
