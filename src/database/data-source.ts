import "reflect-metadata";
import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import path from "path";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  url: process.env.DATABASE_URL,
  entities: [path.join(__dirname, "../entities/*.js")],
  migrations: [path.join(__dirname, "../migrations/*.ts")],
  migrationsTableName: "migrations",
  synchronize: false,
  logging: true,
  migrationsRun: true,
});