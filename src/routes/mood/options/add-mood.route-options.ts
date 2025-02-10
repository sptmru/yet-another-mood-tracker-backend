import { RouteOptionsWithoutHandler } from '../../../infrastructure/api/types/RouteOptionsWithoutHandler';

export const addMoodRouteOptions: RouteOptionsWithoutHandler = {
  method: 'POST',
  url: '/api/v1/moods',
  schema: {
    tags: ['mood'],
    description: 'Add a mood',
    summary: 'Add a mood',
    body: {
      $ref: 'Mood#',
    },
    response: {
      201: {
        description: 'Successful response',
        $ref: 'Mood#',
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
