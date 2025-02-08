import * as dotenv from 'dotenv';

const parsedConfig = dotenv.config().parsed;

export const config = {
  log: {
    level: parsedConfig?.LOG_LEVEL != null ? parsedConfig.LOG_LEVEL : 'debug',
    directory: parsedConfig?.LOG_DIRECTORY != null ? parsedConfig.LOG_DIRECTORY : './logs',
    file: `${parsedConfig?.LOG_LEVEL != null ? parsedConfig.LOG_LEVEL : 'debug'}.log`,
    logToFile: parsedConfig?.LOG_TO_FILE != null ? parsedConfig.LOG_TO_FILE.toLowerCase() === 'true' : false,
  },
};
