import { HealthCheckResult } from '../../domain/misc/health/healthcheck-result.enum';
import { RouteOptionsWithoutHandler } from '../../infrastructure/api/types/RouteOptionsWithoutHandler';

export const healthRouteOptions: RouteOptionsWithoutHandler = {
  method: 'GET',
  url: '/api/v1/health',
  schema: {
    tags: ['monitoring'],
    description: 'A healthcheck endpoint. Returns 200 if the API is alive, returns nothing if it is not',
    summary: 'Healthcheck endpoint',
    response: {
      200: {
        description: 'Successful response',
        type: 'object',
        properties: {
          status: { type: 'string', enum: [HealthCheckResult.UP] },
        },
      },
      500: {
        description: 'Unsuccessful response',
        type: 'object',
        properties: {
          status: { type: 'string', enum: [HealthCheckResult.DOWN] },
          error: { type: 'string' },
        },
      },
    },
  },
};
