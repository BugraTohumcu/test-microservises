import winston from 'winston'

export const logger = winston.createLogger({
    level:'info',
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({format: 'YYYY-MM-DD HH:mm'}),
        winston.format.printf(({timestamp, level, message}) => {return `[${timestamp}] | level: ${level} | message: ${message}`})
    ),
    transports:[
        new winston.transports.Console()
    ]
});



