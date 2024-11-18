import knex, { Knex } from "knex";
import { configDotenv } from "dotenv";
configDotenv();

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const config: Knex.Config = {
  client: "pg",
  connection: {
    host: DB_HOST,
    port: Number(DB_PORT),
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
  },
};

const db = knex(config);

export { db };
