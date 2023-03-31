import {MigrationInterface, QueryRunner} from "typeorm";

export class AddPriorityToEntities1680254169502 implements MigrationInterface {
    name = 'AddPriorityToEntities1680254169502'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "panel_entry" ADD "priority" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "panel" ADD "priority" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "project" ADD "priority" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "skill" ADD "priority" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "category" ADD "priority" integer NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "priority"`);
        await queryRunner.query(`ALTER TABLE "skill" DROP COLUMN "priority"`);
        await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "priority"`);
        await queryRunner.query(`ALTER TABLE "panel" DROP COLUMN "priority"`);
        await queryRunner.query(`ALTER TABLE "panel_entry" DROP COLUMN "priority"`);
    }

}
