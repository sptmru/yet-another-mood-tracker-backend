import { RouteOptionsWithoutHandler } from '../../../infrastructure/api/types/RouteOptionsWithoutHandler';

export const getReasonByIdRouteOptions: RouteOptionsWithoutHandler = {
  method: 'GET',
  url: '/api/v1/reasons/:id',
  schema: {
    tags: ['reason'],
    description: 'Get a reason by id',
    summary: 'Get a reason by id',
    params: {
      type: 'object',
      properties: {
        id: { type: 'string', description: 'The id of the reason' },
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
