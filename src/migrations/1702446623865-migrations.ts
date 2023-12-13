import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1702446623865 implements MigrationInterface {
    name = 'Migrations1702446623865'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "order" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "priceTotal" integer NOT NULL, "stringList" character varying NOT NULL, "ubication" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" character varying NOT NULL, CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "order"`);
    }

}
