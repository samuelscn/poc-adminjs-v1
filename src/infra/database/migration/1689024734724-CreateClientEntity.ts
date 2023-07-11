import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateClientEntity1689024734724 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "Client",
      columns: [
        {
          name: "id",
          type: "int",
          isPrimary: true,
          isGenerated: true,
          generationStrategy: "increment",
        },
        {
          name: "name",
          type: "varchar",
          length: "255",
          isNullable: false,
        },
        {
          name: "phone",
          type: "varchar",
          length: "11",
          isNullable: false,
        },
        {
          name: "address",
          type: "varchar",
          length: "255",
          isNullable: false,
        },
        {
          name: "street",
          type: "varchar",
          length: "255",
          isNullable: false,
        },
        {
          name: "number",
          type: "int",
          isNullable: false,
        },
        {
          name: "complement",
          type: "varchar",
          length: "255",
          isNullable: true,
        },
        {
          name: "city_id",
          type: "int",
          isNullable: false,
        },
      ],
    }));

    await queryRunner.createForeignKey("Client", new TableForeignKey({
      columnNames: ["city_id"],
      referencedColumnNames: ["id"],
      referencedTableName: "City",
      onDelete: "CASCADE",
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("Client");
  }

}
