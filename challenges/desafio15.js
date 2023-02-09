/* Includes the "evaluation" field with the value "0"
in all documents of the collection. */

db.produtos.updateMany(
  {},
  { $set: { avaliacao: 0 } },
);

/* Increments the value of the "evaluation" field
by "5" on all beef sandwiches. */

db.produtos.updateMany(
  { tags: { $in: ["bovino"] } },
  { $inc: { avaliacao: 5 } },
);

/* Increments the "evalutaion" field value by "3"
on all poultry sandwiches. */

db.produtos.updateMany(
  { tags: { $in: ["ave"] } },
  { $inc: { avaliacao: 3 } },
);

// Returns products "name" and "evaluation".

db.produtos.find(
  {},
  { _id: false, nome: true, avaliacao: true },
);