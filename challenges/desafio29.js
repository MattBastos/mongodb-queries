// Rename field "descricao" to "descricaoSite" in all documents.

db.produtos.updateMany(
  {},
  { $rename: { descricao: "descricaoSite" } },
);

// Returns products "name" and "siteDescription".

db.produtos.find(
  {},
  { _id: false, nome: true, descricaoSite: true },
);