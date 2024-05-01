import winston from "winston";

const logDir = "./logs";
export const logger = winston.createLogger({
	format: winston.format.combine(
		winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
		winston.format.json(),
	),
	defaultMeta: { service: "itpohgero" },
	transports: [
		new winston.transports.File({
			filename: `${logDir}/error.log`,
			level: "error", // Only log messages at level 'error' or higher
		}),
		new winston.transports.File({
			filename: `${logDir}/info.log`,
			level: "info", // Only log messages at level 'info' or higher
		}),
		new winston.transports.Console({
			format: winston.format.combine(
				winston.format.colorize(),
				winston.format.simple(),
			),
		}),
	],
});
