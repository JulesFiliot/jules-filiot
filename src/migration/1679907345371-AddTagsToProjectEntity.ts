import {MigrationInterface, QueryRunner} from "typeorm";

export class AddTagsToProjectEntity1679907345371 implements MigrationInterface {
    name = 'AddTagsToProjectEntity1679907345371'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project" ADD "tags" text array`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "tags"`);
    }

}
