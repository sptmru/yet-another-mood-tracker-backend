import { RouteOptionsWithoutHandler } from '../../infrastructure/api/types/RouteOptionsWithoutHandler';

export const getReasonsRouteOptions: RouteOptionsWithoutHandler = {
  method: 'GET',
  url: '/api/v1/reasons',
  schema: {
    tags: ['reason'],
    description: 'Get all reasons',
    summary: 'Get all reasons',
    response: {
      200: {
        description: 'Successful response',
        type: 'array',
        items: {
          $ref: 'Reason',
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
