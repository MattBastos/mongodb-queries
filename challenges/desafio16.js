/* Adds the "ultimaModificacao" field with the current date
only in the "Big Mac" sandwich. */

db.produtos.updateOne(
  { nome: "Big Mac" },
  { $currentDate: { ultimaModificacao: { $type: "date" } } },
);

/* Returns the "name" of all documents where
the "ultimaModificacao" field exists. */

db.produtos.find(
  { ultimaModificacao: { $exists: true } },
  { _id: false, nome: true },
);