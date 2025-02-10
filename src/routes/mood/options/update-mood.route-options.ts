import { RouteOptionsWithoutHandler } from '../../../infrastructure/api/types/RouteOptionsWithoutHandler';

export const updateMoodRouteOptions: RouteOptionsWithoutHandler = {
  method: 'PUT',
  url: '/api/v1/moods/:id',
  schema: {
    tags: ['mood'],
    description: 'Update a mood',
    summary: 'Update a mood',
    params: {
      type: 'object',
      properties: {
        id: { type: 'string', description: 'The id of the mood' },
      },
    },
    body: {
      $ref: 'UpdateMoodDTO#',
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
