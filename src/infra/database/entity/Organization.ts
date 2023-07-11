import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

@Entity('organization')
export class Organization extends BaseEntity {
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
}
