import { DataSource } from "typeorm";
import { Company } from "../app/entities/company";
import * as dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Company],
  migrations: ["src/database/migrations/*.ts"], 
  migrationsTableName: "migrations",
  synchronize: true,
  logging: true,
});
