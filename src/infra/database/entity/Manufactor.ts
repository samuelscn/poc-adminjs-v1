import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, JoinColumn, ManyToOne, OneToMany } from "typeorm"
import { City } from "./City.js";
import { Product } from "./Product.js";

@Entity()
export class Manufactor extends BaseEntity {
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
    name: 'site',
  })
  site: string;


  @OneToMany(() => Product, product => product.manufactor)
  products: Product[];
}
