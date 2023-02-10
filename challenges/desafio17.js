/* Insert in a new collection "resumoProdutos" a document with the fields:
"franquia" with the value "McDonalds" and "totalProdutos" with the value
being the quantity of products registered in the "produtos" collection. */

db.resumoProdutos.insertOne(
  {
    franquia: "McDonalds",
    totalProdutos: db.produtos.countDocuments({}),
  },
);

/* Returns the "franquia" and "totalProdutos"
of the "resumoProdutos" collection. */

db.resumoProdutos.find(
  {},
  { _id: false, franquia: true, totalProdutos: true },
);