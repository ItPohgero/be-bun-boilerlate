import cron from "@elysiajs/cron"

export  const Cronjob = {
    Main: () => cron({
        name: 'heartbeat',
        pattern: '*/50 * * * * *',
        run() {
            console.log("50 detik :", new Date())
        }
    })

}