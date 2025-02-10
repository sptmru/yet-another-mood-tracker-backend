import { RouteOptionsWithoutHandler } from '../../../infrastructure/api/types/RouteOptionsWithoutHandler';

export const updateReasonRouteOptions: RouteOptionsWithoutHandler = {
  method: 'PUT',
  url: '/api/v1/reasons/:id',
  schema: {
    tags: ['reason'],
    description: 'Update a reason',
    summary: 'Update a reason',
    params: {
      type: 'object',
      properties: {
        id: { type: 'string', description: 'The id of the reason' },
      },
    },
    body: {
      $ref: 'Reason#',
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
