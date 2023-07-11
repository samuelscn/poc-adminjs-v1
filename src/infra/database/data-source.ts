import "reflect-metadata"
import { DataSource } from "typeorm"
import { Organization } from "./entity/Organization.js"
import Users from "./entity/Users.js"
import { Client } from "./entity/Client.js"
import { City } from "./entity/City.js"
import { Manufactor } from "./entity/Manufactor.js"
import { Item } from "./entity/Item.js"
import { Product } from "./entity/Product.js"
import { Sale } from "./entity/Sale.js"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5435,
  username: "root",
  password: "postgres",
  database: "poc_adminjs_v1",
  synchronize: true,
  logging: false,
  entities: [Organization, Users, Client, City, Manufactor, Item, Product, Sale],
  migrations: [],
  subscribers: [],
})
