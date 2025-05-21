import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1746650050453 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "Company",
        columns: [
          {
            name: "id",
            type: "varchar",
            length: "36",
            isPrimary: true,
            isNullable: false,
          },
          {
            name: "name_company",
            type: "varchar",
            length: "255",
            isNullable: false,
          },
          {
            name: "cnpj_company",
            type: "varchar",
            length: "20",
            isUnique: true,
            isNullable: false,
          },
          {
            name: "address",
            type: "varchar",
            length: "255",
            isNullable: false,
          },
          {
            name: "telephone",
            type: "varchar",
            length: "20",
            isNullable: true,
          },
          {
            name: "email",
            type: "varchar",
            length: "255",
            isNullable: true,
          },
          {
            name: "foundation_date",
            type: "datetime",
            isNullable: true,
          },
          {
            name: "createdAt",
            type: "datetime",
            default: "CURRENT_TIMESTAMP",
            isNullable: false,
          },
          {
            name: "updatedAt",
            type: "datetime",
            default: "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP",
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("Company");
  }
}
