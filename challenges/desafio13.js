/* Include the "criadoPor" field in all documents,
putting "Ronald McDonald" in the value for that field. */

db.produtos.updateMany(
  {},
  { $set: { criadoPor: "Ronald McDonald" } },
);

// Returns products "name" and "criadoPor".

db.produtos.find(
  {},
  { _id: false, nome: true, criadoPor: true },
);