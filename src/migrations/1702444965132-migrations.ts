import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1702444965132 implements MigrationInterface {
    name = 'Migrations1702444965132'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "state"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" ADD "state" boolean NOT NULL DEFAULT false`);
    }

}
