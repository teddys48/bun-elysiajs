import { buildResponse } from "../../helper/response";
import * as repository from "../repository/product";

const all = async () => {
  try {
    let result = await repository.all();
    return buildResponse(0, "success", result);
  } catch (error) {
    return buildResponse(500, `${(error as Error).message}`, null);
  }
};

export { all };
