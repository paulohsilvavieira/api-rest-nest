import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableUser1662940530247 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'email',
            type: 'varchar',
            isNullable: false,
            default: "''",
          },
          {
            name: 'password',
            type: 'varchar',
            isNullable: false,
            default: "''",
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: true,
            default: "''",
          },

          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
