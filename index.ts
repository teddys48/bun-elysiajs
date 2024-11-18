import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { productRoute } from "./app/route/product";
import { opentelemetry } from "@elysiajs/opentelemetry";
import { cors } from "@elysiajs/cors";
import dotenv from "dotenv";
dotenv.config();

const app = new Elysia();

const { PORT } = process.env;

app.use(opentelemetry()).use(swagger()).use(cors());

app.get("/", () => "Welcome!");

app.group("/api", (app) => app.use(productRoute));

app.listen(Number(PORT), () => {
  console.log("server running on 3001");
});
