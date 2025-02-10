import { RouteOptionsWithoutHandler } from '../../../infrastructure/api/types/RouteOptionsWithoutHandler';

export const deleteReasonRouteOptions: RouteOptionsWithoutHandler = {
  method: 'DELETE',
  url: '/api/v1/reasons/:id',
  schema: {
    tags: ['reason'],
    description: 'Delete a reason',
    summary: 'Delete a reason',
    params: {
      type: 'object',
      properties: {
        id: { type: 'string', description: 'The id of the reason' },
      },
    },
    response: {
      204: {
        description: 'Successful response',
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
