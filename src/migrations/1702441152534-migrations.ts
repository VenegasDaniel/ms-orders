import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1702441152534 implements MigrationInterface {
    name = 'Migrations1702441152534'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "stringList"`);
        await queryRunner.query(`ALTER TABLE "order" ADD "stringList" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "stringList"`);
        await queryRunner.query(`ALTER TABLE "order" ADD "stringList" text`);
    }

}
