import * as dotenv from 'dotenv';

const parsedConfig = dotenv.config().parsed;

export const config = {
  mode: parsedConfig?.MODE != null ? parsedConfig.MODE : 'development',
  log: {
    level: parsedConfig?.LOG_LEVEL != null ? parsedConfig.LOG_LEVEL : 'debug',
    directory: parsedConfig?.LOG_DIRECTORY != null ? parsedConfig.LOG_DIRECTORY : './logs',
    file: `${parsedConfig?.LOG_LEVEL != null ? parsedConfig.LOG_LEVEL : 'debug'}.log`,
    logToFile: parsedConfig?.LOG_TO_FILE != null ? parsedConfig.LOG_TO_FILE.toLowerCase() === 'true' : false,
  },
  api: {
    port: parsedConfig?.HTTP_PORT != null ? Number(parsedConfig.HTTP_PORT) : 3000,
    hostname: parsedConfig?.HTTP_HOSTNAME != null ? parsedConfig.HTTP_HOSTNAME : 'http://localhost',
    basePrefix: parsedConfig?.API_BASE_PREFIX != null ? parsedConfig.API_BASE_PREFIX : '/api/v1',
    authToken: parsedConfig?.API_AUTH_TOKEN != null ? parsedConfig.API_AUTH_TOKEN : 'secret',
  },
  loki: {
    enabled: parsedConfig?.LOKI_ENABLED != null ? parsedConfig.LOKI_ENABLED.toLowerCase() === 'true' : false,
    host: parsedConfig?.LOKI_ENDPOINT != null ? parsedConfig.LOKI_ENDPOINT : 'http://loki-gateway.svc.cluster.local',
    labels: {
      job: parsedConfig?.LOKI_LABEL_JOB != null ? parsedConfig.LOKI_LABEL_JOB : 'yet-another-mood-tracker-api',
    },
    json: parsedConfig?.LOKI_JSON != null ? parsedConfig.LOKI_JSON.toLowerCase() === 'true' : false,
    interval: parsedConfig?.LOKI_INTERVAL != null ? Number(parsedConfig.LOKI_INTERVAL) : 5,
    timeout: parsedConfig?.LOKI_TIMEOUT != null ? Number(parsedConfig.LOKI_TIMEOUT) : 10000,
  },
  graylog: {
    enabled: parsedConfig?.GRAYLOG_ENABLED != null ? parsedConfig.GRAYLOG_ENABLED.toLowerCase() === 'true' : false,
    host: parsedConfig?.GRAYLOG_HOST != null ? parsedConfig.GRAYLOG_HOST : 'graylog',
    port: parsedConfig?.GRAYLOG_PORT != null ? Number(parsedConfig.GRAYLOG_PORT) : 12201,
    hostname: parsedConfig?.GRAYLOG_HOSTNAME != null ? parsedConfig.GRAYLOG_HOSTNAME : 'graylog',
    facility: parsedConfig?.GRAYLOG_FACILITY != null ? parsedConfig.GRAYLOG_FACILITY : 'yet-another-mood-tracker-api',
    bufferSize: parsedConfig?.GRAYLOG_BUFFER_SIZE != null ? Number(parsedConfig.GRAYLOG_BUFFER_SIZE) : 1400,
  },
};
