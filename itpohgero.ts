import figlet from 'figlet'

export const ITPOHGERO = (app: any) => {
    console.log(`Running at ${app.server?.hostname}:${app.server?.port}`)
    const body = figlet.textSync(Bun.env.CREDIT ?? '')
    console.log(body)
    console.log('Author :', Bun.env.AUTHOR)
}
