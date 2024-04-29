import { t } from 'elysia'

export type SchemaAuthSignInType = {
    email: string
    password: string
}

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


export type SchemaAuthSignUpType = {
    name: string
    email: string
    password: string
}

export const SchemaAuthSignUp = {
    body: t.Object({
        name: t.String({
            format: 'email',
            examples: "wahyu agus arifin"
        },),
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