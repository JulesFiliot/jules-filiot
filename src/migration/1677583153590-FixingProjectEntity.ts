import {MigrationInterface, QueryRunner} from "typeorm";

export class FixingProjectEntity1677583153590 implements MigrationInterface {
    name = 'FixingProjectEntity1677583153590'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "usefulLinks"`);
        await queryRunner.query(`ALTER TABLE "project" ADD "usefulLinks" json`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "usefulLinks"`);
        await queryRunner.query(`ALTER TABLE "project" ADD "usefulLinks" json array`);
    }

}
