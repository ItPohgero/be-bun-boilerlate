import { logger } from "./src/pkg/log/main";

logger.info("Application started successfully.");
console.log(`Application running in  ${Bun.env.ENV}`);
