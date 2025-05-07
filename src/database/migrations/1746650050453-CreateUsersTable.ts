import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1746650050453 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "Company",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
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
                    type: "timestamp",
                    isNullable: true,
                },
                {
                    name: "createdAt",
                    type: "timestamp",
                    default: "now()",
                    isNullable: false,
                },
                {
                    name: "updatedAt",
                    type: "timestamp",
                    default: "now()",
                    isNullable: false,
                }
            ],
            indices: [
                {
                    name: "IDX_COMPANY_CNPJ",
                    columnNames: ["cnpj_company"],
                    isUnique: true,
                },
            ]
        }));
    }

    // Tudo que eu fizer acima pode ser desfeito abaixo
    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
