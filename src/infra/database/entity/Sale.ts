import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, JoinColumn, ManyToOne, OneToMany } from "typeorm"
import { City } from "./City.js";
import { Product } from "./Product.js";
import { Client } from "./Client.js";
import { Item } from "./Item.js";

@Entity()
export class Sale extends BaseEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number;

  @Column('timestamp', {
    nullable: false,
    name: 'sale_date',
  })
  saleDate: Date;

  @Column('decimal', {
    nullable: false,
    name: 'total_value',
  })
  totalValue: number;

  @Column('decimal', {
    nullable: false,
    name: 'paid_value',
  })
  paidValue: number;

  @Column('decimal', {
    nullable: false,
    name: 'discount',
  })
  discount: number;

  @ManyToOne(() => Client, client => client.sales)
  @JoinColumn({ name: 'client_id' })
  client: Client;

  @OneToMany(() => Item, item => item.sale)
  items: Item[];
}
