import { FastifyInstance } from 'fastify';
import { healthRouteOptions } from './health.route-options';
import { HealthController } from '../../controllers/health/health.controller';

export class HealthRoute {
  public prefix: string = '/health';

  // eslint-disable-next-line require-await
  async routes(fastify: FastifyInstance): Promise<void> {
    fastify.get('', healthRouteOptions, HealthController.healthCheck);
  }
}
