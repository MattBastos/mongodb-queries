/* Removes the first ingredient from the
"Quarteirão com Queijo" sandwich. */

db.produtos.updateOne(
  { nome: "Quarteirão com Queijo" },
  { $pop: { ingredientes: -1 } },
);

// Returns products "name" and "ingredients".

db.produtos.find(
  {},
  { _id: false, nome: true, ingredientes: true },
);