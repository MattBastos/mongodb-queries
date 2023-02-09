/* Returns the "name" and "likes" of snacks that
had "likes" greater than 10 and less than 100. */

db.produtos.find(
  { curtidas: { $gt: 10, $lt: 100 } },
  { _id: false, nome: true, curtidas: true },
);