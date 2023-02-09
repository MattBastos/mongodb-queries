/* Returns product "name", "likes", and how many items sold
for products other than "Big Mac" and "McChicken". */

db.produtos.find(
  {
    $and: [
      { nome: { $ne: "Big Mac" } },
      { nome: { $ne: "McChicken" } },
    ],
  },
  { _id: false, nome: true, curtidas: true, vendidos: true },
);