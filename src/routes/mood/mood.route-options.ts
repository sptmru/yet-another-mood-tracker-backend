import { RouteOptionsWithoutHandler } from '../../infrastructure/api/types/RouteOptionsWithoutHandler';

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

export const getMoodsWithReasonsRouteOptions: RouteOptionsWithoutHandler = {
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
          $ref: 'Mood',
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
