/* Adds ketchup to "ingredients" list for all sandwiches except "McChicken",
ensuring there are no duplicate "ingredients". */

db.produtos.updateMany(
  { nome: { $ne: "McChicken" } },
  { $addToSet: { ingredientes: "ketchup" } },
);

// Returns products "name" and "ingredients".

db.produtos.find(
  {},
  { _id: false, nome: true, ingredientes: true },
);