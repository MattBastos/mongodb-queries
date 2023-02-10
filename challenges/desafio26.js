/* Inserts the "contém sódio" value to the end of the "tags" list
on products where the sodium percentage is greater than 20
and less than 40. */

db.produtos.updateMany(
  { valoresNutricionais: {
      $elemMatch: {
        tipo: "sódio",
        percentual: { $gt: 20, $lt: 40 },
      },
    },
  },
  { $push: { tags: "contém sódio" } },
);

// Returns products "name" and "tags".

db.produtos.find(
  {},
  { _id: false, nome: true, tags: true },
);