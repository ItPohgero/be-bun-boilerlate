import { t } from 'elysia'

export const SchemaAuthSignIn = {
    body: t.Object({
        email: t.String({
            format: 'email',
            examples: "wahyu@gmail.com"
        },),
        password: t.String({
            minLength: 4,
            examples: "87#!Ab"
        })
    })
}