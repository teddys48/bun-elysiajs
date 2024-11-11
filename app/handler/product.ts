import type { Context } from "elysia";
import * as usecase from "../usecase/product";

const all = async (ctx: Context) => {
  let result = await usecase.all();
  return result;
};

export { all };
