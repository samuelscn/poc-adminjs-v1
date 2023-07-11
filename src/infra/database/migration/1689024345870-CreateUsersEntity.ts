import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUsersEntity1689024345870 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "Users",
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
          name: "email",
          type: "varchar",
          length: "200",
          isNullable: false,
        },
        {
          name: "password",
          type: "varchar",
          length: "255",
          isNullable: false,
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("Users")
  }
}
