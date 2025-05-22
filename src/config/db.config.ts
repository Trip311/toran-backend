import { DataSource } from "typeorm";
import "reflect-metadata";
import dotenv from 'dotenv';

dotenv.config();

const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME, DB_PORT } = process.env;

export const dbConnection = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize: true,
    entities: ['src/entity/*.ts']
});

 export const initialize = async () => {
    await dbConnection.initialize().catch((err: any) => {
        console.error("Error with db connection", err);
    })
        console.info("Connection with DB established");
 }
