
Boilerplate Bun Service API

## Project Structure

| No  | Folder           | Description                                                                                                                        |
| --- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 1   | \_templates      | Folder ini berisi templat generator boilerplate. Kamu dapat memanipulasi templat di sini untuk menyesuaikan pembuatan boilerplate. |
| 2   | prisma           | Prisma init.                                                                                                                       |
| 3   | src              | Folder inti yang berisi kode sumber aplikasi.                                                                                      |
| 4   | test             | Unit Test                                                                                                                          |
| 5   | src/app/handler  | Handler aplikasi.                                                                                                                  |
| 6   | src/app/model    | Model seperti untuk query prisma, logic app dan lain lain.                                                                         |
| 7   | src/schema       | Validation, mapping payload.                                                                                                       |
| 8   | pkg/cron         | Folder untuk setup conjob                                                                                                          |
| 9   | pkg/jwt          | Folder untuk setup jwt                                                                                                             |
| 10  | pkg/prisma       | Folder untuk setup prisma                                                                                                          |
| 10  | pkg/mail         | Folder untuk setup mail (sender, template)                                                                                         |
| 11  | router/http      | Router aplikasi Rest Api.                                                                                                          |
| 12  | router/websocket | Router aplikasi Websocket.                                                                                                         |
| 13  | types            | Interface dan types.                                                                                                               |
| 14  | utils            | Logika umum dan helpers.                                                                                                           |

## Includes

1. JWT
   Json Web Token
2. Swagger
   Akses dengan path `/swagger`
3. Prisma Client
4. Postgres
5. Cron
6. Web Socket
7. Send Mail with Resend
8. Cors
9. Hygen Generator
10. Prettier

Thanks u for support

## Github Link

[Klik Disini](https://github.com/ItPohgero/be-bun-boilerlate)
