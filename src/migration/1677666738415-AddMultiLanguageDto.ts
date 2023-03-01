import {MigrationInterface, QueryRunner} from "typeorm";

export class AddMultiLanguageDto1677666738415 implements MigrationInterface {
    name = 'AddMultiLanguageDto1677666738415'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "panel_entry" DROP COLUMN "externalLink"`);
        await queryRunner.query(`ALTER TABLE "panel_entry" ADD "externalLinks" json array`);
        await queryRunner.query(`ALTER TABLE "my_info" DROP COLUMN "fullInfo"`);
        await queryRunner.query(`ALTER TABLE "my_info" ADD "fullInfo" json array`);
        await queryRunner.query(`ALTER TABLE "my_info" DROP COLUMN "sumUpInfo"`);
        await queryRunner.query(`ALTER TABLE "my_info" ADD "sumUpInfo" json array`);
        await queryRunner.query(`ALTER TABLE "panel_entry" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "panel_entry" ADD "title" json NOT NULL`);
        await queryRunner.query(`ALTER TABLE "panel_entry" DROP COLUMN "subtitle"`);
        await queryRunner.query(`ALTER TABLE "panel_entry" ADD "subtitle" json array NOT NULL`);
        await queryRunner.query(`ALTER TABLE "panel_entry" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "panel_entry" ADD "description" json array`);
        await queryRunner.query(`ALTER TABLE "panel" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "panel" ADD "title" json NOT NULL`);
        await queryRunner.query(`ALTER TABLE "panel" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "panel" ADD "description" json`);
        await queryRunner.query(`ALTER TABLE "skill" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "skill" ADD "title" json NOT NULL`);
        await queryRunner.query(`ALTER TABLE "skill" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "skill" ADD "description" json`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "skill" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "skill" ADD "description" character varying`);
        await queryRunner.query(`ALTER TABLE "skill" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "skill" ADD "title" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "panel" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "panel" ADD "description" character varying`);
        await queryRunner.query(`ALTER TABLE "panel" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "panel" ADD "title" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "panel_entry" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "panel_entry" ADD "description" text array`);
        await queryRunner.query(`ALTER TABLE "panel_entry" DROP COLUMN "subtitle"`);
        await queryRunner.query(`ALTER TABLE "panel_entry" ADD "subtitle" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "panel_entry" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "panel_entry" ADD "title" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "my_info" DROP COLUMN "sumUpInfo"`);
        await queryRunner.query(`ALTER TABLE "my_info" ADD "sumUpInfo" text array`);
        await queryRunner.query(`ALTER TABLE "my_info" DROP COLUMN "fullInfo"`);
        await queryRunner.query(`ALTER TABLE "my_info" ADD "fullInfo" text array`);
        await queryRunner.query(`ALTER TABLE "panel_entry" DROP COLUMN "externalLinks"`);
        await queryRunner.query(`ALTER TABLE "panel_entry" ADD "externalLink" character varying`);
    }

}
