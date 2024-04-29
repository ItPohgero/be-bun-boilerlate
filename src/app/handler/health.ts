import Elysia from "elysia"

export const HandlerHealth = {
    Main: () => {
        return {
            "Framework": Elysia.name,
            "BunVersion": Bun.version,
        }
    }
}