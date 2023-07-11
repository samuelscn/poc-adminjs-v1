import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, JoinColumn, ManyToOne, OneToMany } from "typeorm"
import { City } from "./City.js";
import { Sale } from "./Sale.js";

@Entity()
export class Client extends BaseEntity {
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
    length: 11,
    name: 'phone',
  })
  phone: string;

  @Column('varchar', {
    nullable: false,
    length: 255,
    name: 'address',
  })
  address: string;

  @Column('varchar', {
    nullable: false,
    length: 255,
    name: 'street',
  })
  street: string;

  @Column('decimal', {
    nullable: false,
    name: 'number',
  })
  number: string;

  @Column('varchar', {
    nullable: true,
    length: 255,
    name: 'complement',
  })
  complement: string;

  @ManyToOne(() => City, city => city.clients)
  @JoinColumn({ name: 'city_id' })
  city: City;

  @OneToMany(() => Sale, sale => sale.client)
  sales: Sale[];
}
