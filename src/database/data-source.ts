import { DataSource } from "typeorm";
import * as dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  url: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
  },
  entities: ["build/entities/**/*.js"],
  migrations: ["build/database/migrations/*.js"], 
  migrationsTableName: "migrations",
  migrationsRun: true,
  synchronize: true,
  logging: true,
   extra: {
        connectionLimit: 5 // Ajuste conforme necessário
  }
});
