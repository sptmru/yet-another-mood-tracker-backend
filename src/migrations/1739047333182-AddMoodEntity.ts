import { MigrationInterface, QueryRunner } from "typeorm";

export class AddMoodEntity1739047333182 implements MigrationInterface {
    name = 'AddMoodEntity1739047333182'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "moods" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "rating" integer NOT NULL, "description" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_5e8d7a76ab84b2b527458490774" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "moods"`);
    }

}
