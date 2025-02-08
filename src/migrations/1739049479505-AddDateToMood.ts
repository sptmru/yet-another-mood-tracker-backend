import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDateToMood1739049479505 implements MigrationInterface {
    name = 'AddDateToMood1739049479505'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "moods" ADD "date" date NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "moods" DROP COLUMN "date"`);
    }

}
