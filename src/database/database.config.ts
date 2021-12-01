import * as dotenv from 'dotenv';
import {IDatabaseConfig} from "./interface/dbConfig.interface"

dotenv.config();

export const databaseConfig: IDatabaseConfig = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
        dialectOptions: {
            ssl: {
              require: true,
              rejectUnauthorized: false // <<<<<<< YOU NEED THIS
            }
          },
        
    },
    test: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
        dialectOptions: {
            ssl: {
              require: true,
              rejectUnauthorized: false // <<<<<<< YOU NEED THIS
            }
          },
    },
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        dialectOptions: {
            ssl: {
              require: true,
              rejectUnauthorized: false // <<<<<<< YOU NEED THIS
            }
          },
    },
};