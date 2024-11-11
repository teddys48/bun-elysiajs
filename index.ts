import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { productRoute } from "./app/route/product";
import { opentelemetry } from "@elysiajs/opentelemetry";

const app = new Elysia();

app.use(opentelemetry()).use(swagger());

app.get("/", () => "Welcome!");

app.group("/api", (app) => app.use(productRoute));

app.listen(3002, () => {
  console.log("server running on 3001");
});
