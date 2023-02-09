/* Returns the "name" and sales number of snacks that
have been "sold" with a quantity other than 50 and
where the "tags" field does not exist. */

db.produtos.find(
  {
    vendidos: { $ne: 50 },
    tags: { $exists: false },
  },
  { _id: false, nome: true, vendidos: true },
);