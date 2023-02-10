/* Returns the "name" of sandwiches where the number of "likes"
is greater than the number of salled sandwiches. */

db.produtos.find(
  { $expr: { $gt: ["$curtidas", "$vendidos"] } },
  { _id: false, nome: true },
);