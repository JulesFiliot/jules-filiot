import {MigrationInterface, QueryRunner} from "typeorm";

export class FixMyInfoObject1677578071055 implements MigrationInterface {
    name = 'FixMyInfoObject1677578071055'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "my_info" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "fullInfo" text array, "sumUpInfo" text array, "linkedInLink" json, CONSTRAINT "PK_e701b937033d3e027976870864d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "my_info"`);
    }

}
