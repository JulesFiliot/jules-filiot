import {MigrationInterface, QueryRunner} from "typeorm";

export class RefonteANDmyInfoObject1677500743062 implements MigrationInterface {
    name = 'RefonteANDmyInfoObject1677500743062'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "panel_entry" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "subtitle" character varying NOT NULL, "description" text array, "startDate" TIMESTAMP NOT NULL, "endDate" TIMESTAMP, "externalLink" character varying, "panelId" integer, CONSTRAINT "PK_898f8d84c442d5dccfa767d2748" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "panel" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying, CONSTRAINT "PK_bbd5674b69f7448974aa41ab347" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "skill" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying, "categoryId" integer, CONSTRAINT "PK_a0d33334424e64fb78dc3ce7196" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "panel_entry" ADD CONSTRAINT "FK_a810c6f9548fedd7f8084ab2b3d" FOREIGN KEY ("panelId") REFERENCES "panel"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "skill" ADD CONSTRAINT "FK_ae50007dd0ddc9050deaa92185b" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "skill" DROP CONSTRAINT "FK_ae50007dd0ddc9050deaa92185b"`);
        await queryRunner.query(`ALTER TABLE "panel_entry" DROP CONSTRAINT "FK_a810c6f9548fedd7f8084ab2b3d"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TABLE "skill"`);
        await queryRunner.query(`DROP TABLE "panel"`);
        await queryRunner.query(`DROP TABLE "panel_entry"`);
    }

}
