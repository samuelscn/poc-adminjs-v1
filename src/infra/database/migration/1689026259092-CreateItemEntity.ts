import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateItemEntity1689026259092 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "Item",
      columns: [
        {
          name: "id",
          type: "int",
          isPrimary: true,
          isGenerated: true,
          generationStrategy: "increment",
        },
        {
          name: "sale_id",
          type: "int",
          isNullable: false,
        },
        {
          name: "product_id",
          type: "int",
          isNullable: false,
        },
        {
          name: "quantity",
          type: "int",
          isNullable: false,
        },
      ],
    }));

    await queryRunner.createForeignKey("Item", new TableForeignKey({
      columnNames: ["sale_id"],
      referencedColumnNames: ["id"],
      referencedTableName: "Sale",
      onDelete: "CASCADE",
    }));

    await queryRunner.createForeignKey("Item", new TableForeignKey({
      columnNames: ["product_id"],
      referencedColumnNames: ["id"],
      referencedTableName: "Product",
      onDelete: "CASCADE",
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("Item");
  }
}
