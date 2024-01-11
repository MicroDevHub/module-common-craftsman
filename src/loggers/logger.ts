import { Logger } from 'winston';
import * as winston from 'winston';

import { colors, level } from '../types/constant';

interface Config {
  labelService?: string;
  timestampFormat?: string;
}

interface ILogger extends Logger {}

type ILoggerFactory = (name: string) => {
  logger: ILogger;
};

const { label, colorize, combine, splat, timestamp, printf } = winston.format;

class LoggerFactory {
  logger: Logger;
  private readonly config: Config;

  constructor(config?: Config) {
    this.config = config;
    winston.addColors(colors);
    const format = this.format();
    const transports = this.transports();

    this.logger = winston.createLogger({
      level: this.level(),
      levels: level,
      format,
      transports,
    });
  }

  private format() {
    return winston.format.combine(
      label({
        label: this.config?.labelService ,
        message: !!this.config?.labelService,
      }),
      timestamp({
        format: this.config?.timestampFormat || 'YYYY-MM-DD HH:mm:ss:ms',
      }),
      colorize({ all: true }),
      printf(({ level, message, timestamp, ...metadata }) => {
        let msg = `${timestamp} - ${level}: ${message} `;
        const metaMsg = JSON.stringify(metadata);
        if (metaMsg !== '{}') {
          msg += metaMsg;
        }
        return msg;
      }),
      combine(splat()),
    );
  }

  private transports() {
    return [
      new winston.transports.Console(),
      new winston.transports.File({
        filename: 'logs/error.log',
        level: 'error',
      }),
      new winston.transports.File({ filename: 'logs/all.log' }),
    ];
  }

  private level() {
    return process.env.LOG_LEVEL ?? 'info';
  }
}

export { type ILogger, type ILoggerFactory, LoggerFactory };
