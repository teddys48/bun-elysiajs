import * as handler from "../handler/product";
import Elysia from "elysia";
import { validateCreate } from "../validator/product";

const productRoute = new Elysia({ prefix: "/product" })
  .get("/", handler.all)
  .get("/find", handler.find)
  .post("/create", handler.create, validateCreate)
  .post("/update", handler.update, validateCreate)
  .get("/delete", handler.del);

export { productRoute };
