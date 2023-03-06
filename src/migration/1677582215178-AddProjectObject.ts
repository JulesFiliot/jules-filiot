import {MigrationInterface, QueryRunner} from "typeorm";

export class AddProjectObject1677582215178 implements MigrationInterface {
    name = 'AddProjectObject1677582215178'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "project" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "gitLink" json, "usefulLinks" json array, CONSTRAINT "PK_4d68b1358bb5b766d3e78f32f57" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "project"`);
    }

}
