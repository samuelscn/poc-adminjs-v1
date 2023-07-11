import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, JoinColumn, ManyToOne, OneToMany } from "typeorm"
import { City } from "./City.js";
import { Manufactor } from "./Manufactor.js";
import { Item } from "./Item.js";

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number;

  @Column('varchar', {
    nullable: false,
    length: 255,
    name: 'description',
  })
  description: string;

  @Column('decimal', {
    nullable: false,
    name: 'stock',
  })
  stock: number;

  @Column('decimal', {
    nullable: false,
    name: 'cost_price',
  })
  costPrice: number;

  @Column('decimal', {
    nullable: false,
    name: 'sales_price',
  })
  salesPrice: number;

  @ManyToOne(() => Manufactor, manufactor => manufactor.products)
  @JoinColumn({ name: 'manufactor_id' })
  manufactor: Manufactor;

  @OneToMany(() => Item, item => item.product)
  items: Item[];
}
