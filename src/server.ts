import AdminJS, { ComponentLoader } from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import express from 'express'
import { AppDataSource } from 'infra/database/data-source.js'
import * as AdminJSTypeorm from '@adminjs/typeorm'
import { Organization } from 'infra/database/entity/Organization.js'
import passwordsFeature from '@adminjs/passwords'
import argon2 from 'argon2'
import Connect from 'connect-pg-simple'
import session from 'express-session'
import AuthenticateRepository from 'infra/database/repository/authenticate-repository.js'
import Users from 'infra/database/entity/Users.js'
import { fileURLToPath } from 'url'
import path from 'path'
import { dirname } from 'path'
import { componentLoader } from 'components.js'
import { Client } from 'infra/database/entity/Client.js'
import { City } from 'infra/database/entity/City.js'
import { Product } from 'infra/database/entity/Product.js'
import { Item } from 'infra/database/entity/Item.js'
import { Sale } from 'infra/database/entity/Sale.js'
import { Manufactor } from 'infra/database/entity/Manufactor.js'

AdminJS.registerAdapter({
  Database: AdminJSTypeorm.Database,
  Resource: AdminJSTypeorm.Resource,
})

const PORT = 3000

// const authenticateRepository = new AuthenticateRepository()
const authenticate = async (email: string, password: string) => {
  const user = await AppDataSource.manager.findOneBy(Users, { email })
  console.log(user)

  if (user && await argon2.verify(user.password, password)) {
    return Promise.resolve(user)
  }
  return null
}

const start = async () => {
  const app = express();
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  app.use(express.static(path.join(__dirname, '../public')));

  const ConnectSession = Connect(session)
  const sessionStore = new ConnectSession({
    conObject: {
      connectionString: 'postgres://root:postgres@localhost:5435/poc_adminjs_v1',
      ssl: false,
    },
    tableName: 'session',
    createTableIfMissing: true,
  })

  await AppDataSource.initialize()
  const adminOptions = {
    resources: [{
      resource: Users,
      options: { password: { isVisible: false } },
      features: [
        passwordsFeature({
          componentLoader,
          properties: {
            encryptedPassword: 'password',
            password: 'newPassword'
          },
          hash: argon2.hash,
        })
      ],
    }, {
      resource: Organization,
    }, {
      resource: Client,
    }, {
      resource: City,
    }, {
      resource: Manufactor,
    }, {
      resource: Sale,
    }, {
      resource: Item,
    }, {
      resource: Product,
    }],
    branding: {
      logo: '/logo_samles.png',
    }
  }
  const admin = new AdminJS(adminOptions)

  const adminRouter = AdminJSExpress.buildAuthenticatedRouter(admin,
    {
      authenticate,
      cookieName: 'adminjs',
      cookiePassword: 'sessionsecret',
    },
    null,
    {
      store: sessionStore,
      resave: true,
      saveUninitialized: true,
      secret: 'sessionsecret',
      cookie: {
        httpOnly: process.env.NODE_ENV === 'production',
        secure: process.env.NODE_ENV === 'production',
      },
      name: 'adminjs',
    }
  )
  app.use(admin.options.rootPath, adminRouter)

  app.listen(PORT, () => {
    console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`)
  })
}

start()

