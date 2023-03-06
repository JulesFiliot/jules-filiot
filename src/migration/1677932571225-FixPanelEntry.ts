import {MigrationInterface, QueryRunner} from "typeorm";

export class FixPanelEntry1677932571225 implements MigrationInterface {
    name = 'FixPanelEntry1677932571225'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "panel_entry" DROP COLUMN "subtitle"`);
        await queryRunner.query(`ALTER TABLE "panel_entry" ADD "subtitle" jsonb NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "panel_entry" DROP COLUMN "subtitle"`);
        await queryRunner.query(`ALTER TABLE "panel_entry" ADD "subtitle" jsonb array NOT NULL`);
    }

}
