/* Sorts the Products by the amount of snacks sold in ascending order,
showing only the "name" and "quantity" of snacks sold. */

db.produtos.find(
  {},
  { _id: 0, nome: true, vendidos: true }).sort({ vendidos: 1 },
);