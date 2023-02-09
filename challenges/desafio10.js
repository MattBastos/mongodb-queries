/* Returns the "name" of all snacks that have "protein percentage"
greater than or equal to 30 and less than or equal to 40. */

db.produtos.find(
  { valoresNutricionais: {
      $elemMatch: {
        tipo: "proteínas",
        percentual: { $gte: 30, $lte: 40 },
      },
    },
  },
  { _id: false, nome: true },
);