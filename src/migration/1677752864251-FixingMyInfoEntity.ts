import {MigrationInterface, QueryRunner} from "typeorm";

export class FixingMyInfoEntity1677752864251 implements MigrationInterface {
    name = 'FixingMyInfoEntity1677752864251'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "my_info" DROP COLUMN "fullInfo"`);
        await queryRunner.query(`ALTER TABLE "my_info" ADD "fullInfo" json`);
        await queryRunner.query(`ALTER TABLE "my_info" DROP COLUMN "sumUpInfo"`);
        await queryRunner.query(`ALTER TABLE "my_info" ADD "sumUpInfo" json`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "my_info" DROP COLUMN "sumUpInfo"`);
        await queryRunner.query(`ALTER TABLE "my_info" ADD "sumUpInfo" json array`);
        await queryRunner.query(`ALTER TABLE "my_info" DROP COLUMN "fullInfo"`);
        await queryRunner.query(`ALTER TABLE "my_info" ADD "fullInfo" json array`);
    }

}
