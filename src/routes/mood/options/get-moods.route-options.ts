import { RouteOptionsWithoutHandler } from '../../../infrastructure/api/types/RouteOptionsWithoutHandler';

export const getMoodsRouteOptions: RouteOptionsWithoutHandler = {
  method: 'GET',
  url: '/api/v1/moods',
  schema: {
    tags: ['mood'],
    description: 'Get all moods',
    summary: 'Get all moods',
    response: {
      200: {
        description: 'Successful response',
        type: 'array',
        items: {
          $ref: 'MoodWithoutReasons#',
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
