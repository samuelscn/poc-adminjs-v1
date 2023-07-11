import { Organization } from "../entity/Organization.js";
import { AppDataSource } from "../data-source.js";

interface OrganizationRepositoryInterface {
  get(): Promise<Organization[] | void>
}

export default class OrganizationRepository implements OrganizationRepositoryInterface {
  constructor () {}

  async get(): Promise<Organization[] | void> {
    try {
      const organization = await AppDataSource.manager.find(Organization)
      console.log(organization)
      return organization
    } catch (error) {
      console.log(error)
    }
  }
}
