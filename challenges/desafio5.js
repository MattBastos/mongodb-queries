/* Returns the "name", "likes", and the sales number of snacks
that have "likes" equal to 36 or have "sales" equal to 85. */

db.produtos.find(
  {
    $or: [
      { curtidas: { $eq: 36 } },
      { vendidos: { $eq: 85 } },
    ],
  },
  { _id: false, nome: true, curtidas: true, vendidos: true },
);