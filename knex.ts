import knex, { Knex } from "knex";

const config: Knex.Config = {
  client: "pg",
  connection: {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "galau712",
    database: "WARUNG_HIS",
  },
};

const db = knex(config);

export { db };
