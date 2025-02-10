import { RouteOptionsWithoutHandler } from '../../../infrastructure/api/types/RouteOptionsWithoutHandler';

export const getReasonsRouteOptions: RouteOptionsWithoutHandler = {
  method: 'GET',
  url: '/api/v1/reasons',
  schema: {
    tags: ['reason'],
    description: 'Get all reasons',
    summary: 'Get all reasons',
    response: {
      200: {
        description: 'Successful response',
        type: 'array',
        items: {
          $ref: 'Reason',
        },
      },
      500: {
        description: 'Unsuccessful response',
        type: 'object',
        properties: {
          error: { type: 'string' },
        },
      },
    },
  },
};
