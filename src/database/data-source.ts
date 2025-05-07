import "reflect-metadata"
import { DataSource } from "typeorm"
import {CreateUsersTable1746650050453} from './migrations/1746650050453-CreateUsersTable'
import { Company } from "../app/entities/company"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "mysql",
    database: "bd_cred",
    synchronize: true,
    logging: false,
    entities: [Company],
    migrations: [CreateUsersTable1746650050453],
    subscribers: [],
})
