import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeJSONtoJSONB1677931168335 implements MigrationInterface {
    name = 'ChangeJSONtoJSONB1677931168335'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "my_info" DROP COLUMN "fullInfo"`);
        await queryRunner.query(`ALTER TABLE "my_info" ADD "fullInfo" jsonb`);
        await queryRunner.query(`ALTER TABLE "my_info" DROP COLUMN "sumUpInfo"`);
        await queryRunner.query(`ALTER TABLE "my_info" ADD "sumUpInfo" jsonb`);
        await queryRunner.query(`ALTER TABLE "my_info" DROP COLUMN "linkedInLink"`);
        await queryRunner.query(`ALTER TABLE "my_info" ADD "linkedInLink" jsonb`);
        await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "project" ADD "title" jsonb NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "project" ADD "description" jsonb NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "gitLink"`);
        await queryRunner.query(`ALTER TABLE "project" ADD "gitLink" jsonb`);
        await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "usefulLinks"`);
        await queryRunner.query(`ALTER TABLE "project" ADD "usefulLinks" jsonb`);
        await queryRunner.query(`ALTER TABLE "panel" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "panel" ADD "title" jsonb NOT NULL`);
        await queryRunner.query(`ALTER TABLE "panel" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "panel" ADD "description" jsonb`);
        await queryRunner.query(`ALTER TABLE "panel_entry" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "panel_entry" ADD "title" jsonb NOT NULL`);
        await queryRunner.query(`ALTER TABLE "panel_entry" DROP COLUMN "subtitle"`);
        await queryRunner.query(`ALTER TABLE "panel_entry" ADD "subtitle" jsonb array NOT NULL`);
        await queryRunner.query(`ALTER TABLE "panel_entry" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "panel_entry" ADD "description" jsonb array`);
        await queryRunner.query(`ALTER TABLE "panel_entry" DROP COLUMN "externalLinks"`);
        await queryRunner.query(`ALTER TABLE "panel_entry" ADD "externalLinks" jsonb array`);
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "category" ADD "title" jsonb NOT NULL`);
        await queryRunner.query(`ALTER TABLE "skill" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "skill" ADD "title" jsonb NOT NULL`);
        await queryRunner.query(`ALTER TABLE "skill" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "skill" ADD "description" jsonb`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "skill" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "skill" ADD "description" json`);
        await queryRunner.query(`ALTER TABLE "skill" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "skill" ADD "title" json NOT NULL`);
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "category" ADD "title" json NOT NULL`);
        await queryRunner.query(`ALTER TABLE "panel_entry" DROP COLUMN "externalLinks"`);
        await queryRunner.query(`ALTER TABLE "panel_entry" ADD "externalLinks" json array`);
        await queryRunner.query(`ALTER TABLE "panel_entry" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "panel_entry" ADD "description" json array`);
        await queryRunner.query(`ALTER TABLE "panel_entry" DROP COLUMN "subtitle"`);
        await queryRunner.query(`ALTER TABLE "panel_entry" ADD "subtitle" json array NOT NULL`);
        await queryRunner.query(`ALTER TABLE "panel_entry" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "panel_entry" ADD "title" json NOT NULL`);
        await queryRunner.query(`ALTER TABLE "panel" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "panel" ADD "description" json`);
        await queryRunner.query(`ALTER TABLE "panel" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "panel" ADD "title" json NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "usefulLinks"`);
        await queryRunner.query(`ALTER TABLE "project" ADD "usefulLinks" json`);
        await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "gitLink"`);
        await queryRunner.query(`ALTER TABLE "project" ADD "gitLink" json`);
        await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "project" ADD "description" json NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "project" ADD "title" json NOT NULL`);
        await queryRunner.query(`ALTER TABLE "my_info" DROP COLUMN "linkedInLink"`);
        await queryRunner.query(`ALTER TABLE "my_info" ADD "linkedInLink" json`);
        await queryRunner.query(`ALTER TABLE "my_info" DROP COLUMN "sumUpInfo"`);
        await queryRunner.query(`ALTER TABLE "my_info" ADD "sumUpInfo" json`);
        await queryRunner.query(`ALTER TABLE "my_info" DROP COLUMN "fullInfo"`);
        await queryRunner.query(`ALTER TABLE "my_info" ADD "fullInfo" json`);
    }

}
