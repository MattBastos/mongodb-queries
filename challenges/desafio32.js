/* Returns the "name" and "sales" quantity of sandwiches where
the sales number is a multiple of 5. */

db.produtos.find(
  { vendidos: { $mod: [5, 0] } },
  { _id: false, nome: true, vendidos: true },
);