import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm"
import { Client } from "./Client.js";

@Entity()
export class City extends BaseEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number;

  @Column('varchar', {
    nullable: false,
    length: 255,
    name: 'name',
  })
  name: string;

  @Column('varchar', {
    nullable: false,
    length: 255,
    name: 'state',
  })
  state: string;

  @OneToMany(() => Client, client => client.city)
  clients: Client[];
}
