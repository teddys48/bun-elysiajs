import { db } from "../../knex";

const all = async () => {
  return await db.table("product");
};

const find = async (id: number) => {
  return await db.table("product").where("id", id).first();
};

const create = async (data: any) => {
  return await db.table("product").insert(data);
};

const update = async (id: number, data: any) => {
  return await db.table("product").where("id", id).update(data);
};

const del = async (id: number) => {
  return await db.table("product").where("id", id).delete();
};

export { all, find, create, update, del };
