/* Removes the last ingredient from the
"Cheddar McMelt" sandwich. */

db.produtos.updateOne(
  { nome: "Cheddar McMelt" },
  { $pop: { ingredientes: 1 } },
);

// Returns products "name" and "ingredients".

db.produtos.find(
  {},
  { _id: false, nome: true, ingredientes: true },
);