import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateProductEntity1689025540100 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "Product",
      columns: [
        {
          name: "id",
          type: "int",
          isPrimary: true,
          isGenerated: true,
          generationStrategy: "increment",
        },
        {
          name: "description",
          type: "varchar",
          length: "255",
          isNullable: false,
        },
        {
          name: "stock",
          type: "int",
          isNullable: false,
        },
        {
          name: "cost_price",
          type: "decimal",
          precision: 10,
          scale: 2,
          isNullable: false,
        },
        {
          name: "sales_price",
          type: "decimal",
          precision: 10,
          scale: 2,
          isNullable: false,
        },
        {
          name: "manufactor_id",
          type: "int",
          isNullable: false,
        },
      ],
    }));

    await queryRunner.createForeignKey("Product", new TableForeignKey({
      columnNames: ["manufactor_id"],
      referencedColumnNames: ["id"],
      referencedTableName: "Manufactor",
      onDelete: "CASCADE",
  }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("Product");
  }

}
