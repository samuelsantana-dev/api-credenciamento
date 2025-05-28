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
    ? [path.join(__dirname, "entities/**/*.js")]
    : [path.join(__dirname, "../src/entities/**/*.ts")],

  migrations: isProd
    ? [path.join(__dirname, "database/migrations/*.js")]
    : [path.join(__dirname, "../src/database/migrations/*.ts")],

  migrationsTableName: "migrations",
  migrationsRun: true,
  synchronize: false, // não sincronizar automaticamente em produção
  logging: !isProd, // log em desenvolvimento

  extra: {
    connectionLimit: 5,
  },
});
