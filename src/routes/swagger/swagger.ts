import { config } from '../../infrastructure/config/config';

export const swaggerOptions = {
  openapi: {
    openapi: '3.0.0',
    info: {
      title: 'Yet Another Mood Tracker API',
      description: 'Yet Another Mood Tracker API Documentation',
      version: '1.0.0',
    },
    consumes: ['application/json'],
    produces: ['application/json'],
    servers: [
      {
        url: config.api.hostname,
      },
    ],
    components: {
      securitySchemes: {
        ApiKeyAuth: {
          type: 'apiKey',
          name: 'Authorization',
          in: 'header',
        },
      },
    },
    tags: [],
  },
};
