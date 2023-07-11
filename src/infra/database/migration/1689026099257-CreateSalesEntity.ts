import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateSalesEntity1689026099257 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "Sale",
      columns: [
        {
          name: "id",
          type: "int",
          isPrimary: true,
          isGenerated: true,
          generationStrategy: "increment",
        },
        {
          name: "client_id",
          type: "int",
          isNullable: false,
        },
        {
          name: "sale_date",
          type: "date",
          isNullable: false,
        },
        {
          name: "total_value",
          type: "decimal",
          precision: 10,
          scale: 2,
          isNullable: false,
        },
        {
          name: "paid_value",
          type: "decimal",
          precision: 10,
          scale: 2,
          isNullable: false,
        },
        {
          name: "discount",
          type: "decimal",
          precision: 10,
          scale: 2,
          isNullable: true,
        },
      ],
    }));

    await queryRunner.createForeignKey("Sale", new TableForeignKey({
      columnNames: ["client_id"],
      referencedColumnNames: ["id"],
      referencedTableName: "Client",
      onDelete: "CASCADE",
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("Sale");
  }
}
