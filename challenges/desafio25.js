/* Inserts the value "muito sódio" to the end of the "tags" list
in products where the sodium percentage is greater than or equal
to 40. */

db.produtos.updateMany(
  { valoresNutricionais: {
      $elemMatch: {
        tipo: "sódio",
        percentual: { $gte: 40 },
      },
    },
  },
  { $push: { tags: "muito sódio" } },
);

// Returns products "name" and "tags".

db.produtos.find(
  {},
  { _id: false, nome: true, tags: true },
);