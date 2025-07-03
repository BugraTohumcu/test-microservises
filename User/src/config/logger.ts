import winston, { error } from 'winston'

export const logger = winston.createLogger({
    format : winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({format: 'DD-MM-YYYY HH:mm'}),
        winston.format.printf(({timestamp, level, message}) => {return `[${timestamp}] | level: ${level} message: ${message}` })
    ),
    transports: [
        new winston.transports.Console()
    ]
})