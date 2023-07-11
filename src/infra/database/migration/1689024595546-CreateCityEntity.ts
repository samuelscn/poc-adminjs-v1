import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateCityEntity1689024595546 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "City",
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
          name: "state",
          type: "varchar",
          length: "200",
          isNullable: false,
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("City");
  }

}
