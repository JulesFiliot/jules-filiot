import {MigrationInterface, QueryRunner} from "typeorm";

export class fixingPanelEntryDesc1677936480283 implements MigrationInterface {
    name = 'fixingPanelEntryDesc1677936480283'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "panel_entry" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "panel_entry" ADD "description" jsonb`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "panel_entry" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "panel_entry" ADD "description" jsonb array`);
    }

}
