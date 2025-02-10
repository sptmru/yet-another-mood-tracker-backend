import { RouteOptionsWithoutHandler } from '../../../infrastructure/api/types/RouteOptionsWithoutHandler';

export const getMoodByIdRouteOptions: RouteOptionsWithoutHandler = {
  method: 'GET',
  url: '/api/v1/moods/:id',
  schema: {
    tags: ['mood'],
    description: 'Get a mood by id',
    summary: 'Get a mood by id',
    params: {
      type: 'object',
      properties: {
        id: { type: 'string', description: 'The id of the mood' },
      },
    },
    response: {
      200: {
        description: 'Successful response',
        $ref: 'Mood#',
      },
      404: {
        description: 'Mood not found',
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
