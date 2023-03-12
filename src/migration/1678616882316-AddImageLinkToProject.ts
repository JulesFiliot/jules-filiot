import {MigrationInterface, QueryRunner} from "typeorm";

export class AddImageLinkToProject1678616882316 implements MigrationInterface {
    name = 'AddImageLinkToProject1678616882316'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project" ADD "image" jsonb`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "image"`);
    }

}
