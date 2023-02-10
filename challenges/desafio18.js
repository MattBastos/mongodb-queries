/* Inserts "bacon" at the end of the "ingredients" list for
"Big Mac" and "Quarteirão com Queijo" sandwiches. */

db.produtos.updateMany(
  {
    $or: [
      { nome: "Big Mac" },
      { nome: "Quarteirão com Queijo" },
    ],
  },
  { $push: { ingredientes: "bacon" } },
);

// Returns products "name" and "ingredients".

db.produtos.find(
  {},
  { _id: false, nome: true, ingredientes: true },
);