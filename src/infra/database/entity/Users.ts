import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Users extends BaseEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number;

  @Column('varchar', {
    nullable: false,
    length: 20,
    name: 'name',
  })
  name: string;

  @Column('varchar', {
    nullable: false,
    length: 40,
    name: 'email',
  })
  email: string;

  @Column('varchar', {
    nullable: false,
    length: 255,
    name: 'password',
  })
  password: string;
}
