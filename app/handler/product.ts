import type { Context } from "elysia";
import * as usecase from "../usecase/product";

const all = async (ctx: Context) => {
  let result = await usecase.all();
  return result;
};

const find = async (ctx: Context) => {
  let result = await usecase.find(ctx);
  return result;
};

const create = async (ctx: Context) => {
  let result = await usecase.create(ctx);
  return result;
};

const update = async (ctx: Context) => {
  let result = await usecase.update(ctx);
  return result;
};

const del = async (ctx: Context) => {
  let result = await usecase.del(ctx);
  return result;
};

export { all, find, create, update, del };
