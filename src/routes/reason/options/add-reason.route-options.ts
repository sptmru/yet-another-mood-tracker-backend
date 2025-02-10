import { RouteOptionsWithoutHandler } from '../../../infrastructure/api/types/RouteOptionsWithoutHandler';

export const addReasonRouteOptions: RouteOptionsWithoutHandler = {
  method: 'POST',
  url: '/api/v1/reasons',
  schema: {
    tags: ['reason'],
    description: 'Add a reason',
    summary: 'Add a reason',
    body: {
      $ref: 'Reason#',
    },
    response: {
      201: {
        description: 'Successful response',
        $ref: 'Reason#',
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
