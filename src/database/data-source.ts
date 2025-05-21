import { DataSource } from "typeorm";
import { Company } from "../app/entities/company";
import * as dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  url: process.env.DATABASE_URL,
  entities: [Company],
  migrations: ["src/database/migrations/*.ts"], 
  migrationsTableName: "migrations",
  synchronize: true,
  logging: true,
});
