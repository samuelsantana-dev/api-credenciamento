import { DataSource } from "typeorm";
import * as dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  url: process.env.DATABASE_URL,
  entities: ["build/entities/*.js"],
  migrations: ["src/database/migrations/*.ts"], 
  migrationsTableName: "migrations",
  synchronize: true,
  logging: true,
});
