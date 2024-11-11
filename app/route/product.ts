import * as handler from "../handler/product";
import Elysia from "elysia";
import { validateCreate } from "../validator/product";

const productRoute = new Elysia({ prefix: "/product" }).get("/", handler.all);

export { productRoute };
