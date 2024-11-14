import { error, t } from "elysia";

const validateCreate = {
  body: t.Required(
    t.Object({
      name: t.String({
        error(err) {
          return err.errors[0].message;
        },
        minLength: 1,
      }),
      quantity: t.Number({
        error() {
          return "quantity is number";
        },
      }),
      buy_price: t.Number({
        error() {
          return "buy price is number";
        },
      }),
      sell_price: t.Number({
        error() {
          return "sell price is number";
        },
      }),
      image: t.String({
        error(err) {
          return err.errors[0].message;
        },
        minLength: 1,
      }),
    })
  ),
};

export { validateCreate };
