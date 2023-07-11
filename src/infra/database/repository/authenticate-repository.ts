import { AppDataSource } from "../data-source.js";
import User from "../entity/Users.js";
import argon2 from 'argon2';

export default class AuthenticateRepository {
  constructor () {}

  async execute (email: string, password: string) {
    const user = await AppDataSource.manager.findOneBy(User, { email })

    if (user && await argon2.verify(user.password, password)) {
      return Promise.resolve(user)
    }
    return null
  }
}
