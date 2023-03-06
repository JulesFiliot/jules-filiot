import {MigrationInterface, QueryRunner} from "typeorm";

export class FixMultiLanguageDto1677667220132 implements MigrationInterface {
    name = 'FixMultiLanguageDto1677667220132'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "category" ADD "title" json NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "category" ADD "title" character varying NOT NULL`);
    }

}
