import { MigrationInterface, QueryRunner } from "typeorm";

export class AddReasonEntity1739047976665 implements MigrationInterface {
    name = 'AddReasonEntity1739047976665'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "reasons" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_b8104b87e316aacce0c709000a2" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "reasons"`);
    }

}
