import {
  MoodDefinition,
  MoodWithoutReasonsDefinition,
  UpdateMoodDTODefinition,
} from './domain/definitions/mood.definition';
import { ReasonDefinition } from './domain/definitions/reason.definition';
import { Api } from './infrastructure/api/server';
import { dataSource } from './infrastructure/database/data-source';
import { logger } from './misc/Logger';
import { HealthRoute } from './routes/health/health.route';
import { MoodRoute } from './routes/mood/mood.route';
import { ReasonRoute } from './routes/reason/reason.route';

void (async (): Promise<void> => {
  try {
    await dataSource.initialize();
    logger.debug('Data Source initialized');
  } catch (err) {
    logger.error('Error during Data Source initialization', err);
  }

  const api = new Api({
    plugins: [],
    routes: [HealthRoute, ReasonRoute, MoodRoute],
    definitions: [MoodDefinition, ReasonDefinition, UpdateMoodDTODefinition, MoodWithoutReasonsDefinition],
  });
  api.listen();

  const onShutdown = async (): Promise<void> => {
    logger.info('Shutting down...');
    await api.app.close();
    process.exit(0);
  };

  process.on('SIGINT', onShutdown);
  process.on('SIGTERM', onShutdown);
})();
