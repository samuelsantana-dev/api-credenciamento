import { DataSource } from "typeorm";
import { Company } from "../app/entities/company";
import * as dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Company],
  migrations: ["src/database/migrations/*.ts"],
  migrationsTableName: "migrations",
  synchronize: false,
  logging: true,
});


// import "reflect-metadata"
// import { DataSource } from "typeorm"
// import {CreateUsersTable1746650050453} from './migrations/1746650050453-CreateUsersTable'
// import { Company } from "../app/entities/company"

// export const AppDataSource = new DataSource({
//     type: "mysql",
//     host: "localhost",
//     port: 3306,
//     username: "root",
//     password: "mysql",
//     database: "bd_cred",
//     synchronize: true,
//     logging: false,
//     entities: [Company],
//     migrations: [CreateUsersTable1746650050453],
//     subscribers: [],
// })

