import { MigrationInterface, QueryRunner } from "typeorm";

export class AddReasonsToMood1739048492636 implements MigrationInterface {
    name = 'AddReasonsToMood1739048492636'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "moods_reasons" ("mood_id" uuid NOT NULL, "reason_id" uuid NOT NULL, CONSTRAINT "PK_9f9e1c2ce3676a30f7b4d89e8e4" PRIMARY KEY ("mood_id", "reason_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_60b68004c164ca1dd6943cf992" ON "moods_reasons" ("mood_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_da1806a6d54fced47cb02d5373" ON "moods_reasons" ("reason_id") `);
        await queryRunner.query(`ALTER TABLE "moods_reasons" ADD CONSTRAINT "FK_60b68004c164ca1dd6943cf992c" FOREIGN KEY ("mood_id") REFERENCES "moods"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "moods_reasons" ADD CONSTRAINT "FK_da1806a6d54fced47cb02d53734" FOREIGN KEY ("reason_id") REFERENCES "reasons"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "moods_reasons" DROP CONSTRAINT "FK_da1806a6d54fced47cb02d53734"`);
        await queryRunner.query(`ALTER TABLE "moods_reasons" DROP CONSTRAINT "FK_60b68004c164ca1dd6943cf992c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_da1806a6d54fced47cb02d5373"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_60b68004c164ca1dd6943cf992"`);
        await queryRunner.query(`DROP TABLE "moods_reasons"`);
    }

}
