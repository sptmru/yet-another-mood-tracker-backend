import { RouteOptionsWithoutHandler } from '../../../infrastructure/api/types/RouteOptionsWithoutHandler';

export const deleteMoodRouteOptions: RouteOptionsWithoutHandler = {
  method: 'DELETE',
  url: '/api/v1/moods/:id',
  schema: {
    tags: ['mood'],
    description: 'Delete a mood',
    summary: 'Delete a mood',
    params: {
      type: 'object',
      properties: {
        id: { type: 'string', description: 'The id of the mood' },
      },
    },
    response: {
      204: {
        description: 'Successful response',
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
