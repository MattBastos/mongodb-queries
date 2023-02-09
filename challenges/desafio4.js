/* Returns snacks that had sales greater than 50 and less than 100,
showing only the "name" and "quantity" of snacks sold in ascending order. */

db.produtos.find(
  { vendidos: { $gt: 50, $lt: 100 } },
  { _id: false, nome: true, vendidos: true },
).sort({ vendidos: 1 });