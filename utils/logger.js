const { createLogger, format, transports } = require('winston');
const path = require('path');


const logFormat = format.printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} [${level.toUpperCase()}]: ${stack || message}`;
});


const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    logFormat
  ),
  transports: [
    new transports.Console(),


    new transports.File({
      filename: path.join(__dirname, '../logs/error.log'),
      level: 'error'
    }),


    new transports.File({
      filename: path.join(__dirname, '../logs/combined.log')
    })
  ]
});


module.exports = logger;
