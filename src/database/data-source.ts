import "reflect-metadata";
import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import path from "path";

const envFile =
  process.env.NODE_ENV === "production" ? ".env.production" : ".env";
dotenv.config({ path: path.resolve(process.cwd(), envFile) });

const isProd = process.env.NODE_ENV === "production";

export const AppDataSource = new DataSource({
  type: "mysql",
  url: process.env.DATABASE_URL,

  ssl: isProd ? { rejectUnauthorized: false } : undefined,

  entities: isProd
    ? ["./build/app/entities/**/*.js"]
    : ["./src/entities/**/*.ts"],

  migrations: isProd
    ? ["./build/app/database/migrations/*.js"]
    : ["./src/database/migrations/*.ts"],

  migrationsTableName: "migrations",
  migrationsRun: true,
  synchronize: false,
  logging: !isProd,

  extra: {
    connectionLimit: 5,
  },
});
