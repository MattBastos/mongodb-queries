/* Returns all snacks that have "pickles" in their "ingredients"
and only shows the first 3 items contained in the array. */

db.produtos.find(
  { ingredientes: { $in: ["picles"] } },
  { _id: false, nome: true, ingredientes: true, valoresNutricionais: { $slice: 3 } },
);