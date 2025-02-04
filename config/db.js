// db.js
import { config } from 'dotenv';
config();

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_DIALECT } = process.env;

const dbConfig = {
  development: {
    host: DB_HOST,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    dialect: DB_DIALECT,
  },
};

export default dbConfig;
