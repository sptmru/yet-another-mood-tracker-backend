import { RouteOptionsWithoutHandler } from '../../../infrastructure/api/types/RouteOptionsWithoutHandler';

export const findReasonByNameRouteOptions: RouteOptionsWithoutHandler = {
  method: 'GET',
  url: '/api/v1/reasons/:id',
  schema: {
    tags: ['reason'],
    description: 'Find a reason by name',
    summary: 'Find a reason by name',
    params: {
      type: 'object',
      properties: {
        name: { type: 'string', description: 'The name of the reason' },
      },
    },
    response: {
      200: {
        description: 'Successful response',
        $ref: 'Reason#',
      },
      404: {
        description: 'Reason not found',
        type: 'object',
        properties: {
          error: { type: 'string' },
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
