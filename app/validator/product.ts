import { error, t } from "elysia";

const validateCreate = {
  body: t.Object({
    name: t.String({
      error() {
        return "expected string";
      },
    }),
  }),
};

export { validateCreate };
