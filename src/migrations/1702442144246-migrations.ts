import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1702442144246 implements MigrationInterface {
    name = 'Migrations1702442144246'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" ADD "userId" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "userId"`);
    }

}
