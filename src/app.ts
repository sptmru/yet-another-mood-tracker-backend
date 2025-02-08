import { Api } from './infrastructure/api/server';
import { logger } from './misc/Logger';

const api = new Api({
  plugins: [],
  routes: [],
  definitions: [],
});
api.listen();

const onShutdown = async (): Promise<void> => {
  logger.info('Shutting down...');
  await api.app.close();
  process.exit(0);
};

process.on('SIGINT', onShutdown);
process.on('SIGTERM', onShutdown);
