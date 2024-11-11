import { db } from "../../knex";

const all = async () => {
  return await db.table("product");
};

export { all };
