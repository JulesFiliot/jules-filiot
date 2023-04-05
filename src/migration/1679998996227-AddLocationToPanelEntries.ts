import {MigrationInterface, QueryRunner} from "typeorm";

export class AddLocationToPanelEntries1679998996227 implements MigrationInterface {
    name = 'AddLocationToPanelEntries1679998996227'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "panel_entry" ADD "location" jsonb`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "panel_entry" DROP COLUMN "location"`);
    }

}
