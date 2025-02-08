# Yet Another Mood Tracker API

## Description

This repo contains Yet Another Mood Tracker backend source code. It's written in Node.js, and it contains Docker configuration.

## License

This project is licensed with GNU AFFERO GENERAL PUBLIC LICENSE (AGPL-3.0). Please check LICENSE file for more details.

## Running

### Migrations

To generate a migration after entities update, please run this: `npm run typeorm -- -d ./src/infrastructure/database/data-source.ts migration:generate ./src/migrations/MigrationName`

To run migrations, please run this: `npm run migrations:run`. To revert last applied migrations, run `npm run migrations:revert`.
