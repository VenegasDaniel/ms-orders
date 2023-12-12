import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1702423945550 implements MigrationInterface {
    name = 'Migrations1702423945550'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "order" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "priceTotal" integer NOT NULL, "state" boolean NOT NULL DEFAULT false, "stringList" text, "ubication" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "order"`);
    }

}
