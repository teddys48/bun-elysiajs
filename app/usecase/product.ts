import type { Context } from "elysia";
import { buildResponse } from "../../helper/response";
import * as repository from "../repository/product";
import moment from "moment";

const all = async () => {
  try {
    let result = await repository.all();
    return buildResponse(0, "success", result);
  } catch (error) {
    return buildResponse(500, `${(error as Error).message}`, null);
  }
};

const find = async (ctx: Context) => {
  try {
    let { id } = ctx.query;
    let result = await repository.find(Number(id));
    return buildResponse(0, "success", result);
  } catch (error) {
    return buildResponse(500, `${(error as Error).message}`, null);
  }
};

const create = async (ctx: Context) => {
  try {
    let { name, quantity, buy_price, sell_price, image }: any = ctx.body;

    let code = "PRODUCT" + Math.round(100000 * (Math.random() + 1));

    let dataInsert = {
      name: name,
      code: code,
      quantity: quantity,
      buy_price: buy_price,
      sell_price: sell_price,
      image: image,
    };

    await repository.create(dataInsert);
    return buildResponse(0, "success", null);
  } catch (error) {
    return buildResponse(500, `${(error as Error).message}`, null);
  }
};

const update = async (ctx: Context) => {
  try {
    let { name, quantity, buy_price, sell_price, image }: any = ctx.body;
    let { id } = ctx.query;

    let dataUpdate = {
      name: name,
      quantity: quantity,
      buy_price: buy_price,
      sell_price: sell_price,
      image: image,
      updated_on: moment().format("YYYY-MM-DD HH:mm:ss"),
    };

    await repository.update(Number(id), dataUpdate);
    return buildResponse(0, "success", null);
  } catch (error) {
    return buildResponse(500, `${(error as Error).message}`, null);
  }
};

const del = async (ctx: Context) => {
  try {
    let { id } = ctx.query;
    await repository.del(Number(id));
    return buildResponse(0, "success", null);
  } catch (error) {
    return buildResponse(500, `${(error as Error).message}`, null);
  }
};

export { all, find, create, update, del };
