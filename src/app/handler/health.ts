import Elysia from 'elysia'

export const HandlerHealth = {
    Main: ({ version }: { version: string }) => {
        return {
            Framework: Elysia.name,
            BunVersion: Bun.version,
            AppVersion: version,
        }
    },
}
