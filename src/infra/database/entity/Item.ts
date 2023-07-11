import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, JoinColumn, ManyToOne, OneToMany } from "typeorm"
import { City } from "./City.js";
import { Product } from "./Product.js";
import { Client } from "./Client.js";
import { Sale } from "./Sale.js";

@Entity()
export class Item extends BaseEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number;

  @Column('int', {
    nullable: false,
    name: 'quantity',
  })
  quantity: number;

  @ManyToOne(() => Sale, sale => sale.items)
  @JoinColumn({ name: 'sale_id' })
  sale: Sale;

  @ManyToOne(() => Product, product => product.items)
  @JoinColumn({ name: 'product_id' })
  product: Product;
}
