// Removes "onion" item from all sandwiches.

db.produtos.updateMany(
  {},
  { $pull: { ingredientes: "cebola" } },
);

// Returns products "name" and "ingredients".

db.produtos.find(
  {},
  { _id: false, nome: true, ingredientes: true },
);