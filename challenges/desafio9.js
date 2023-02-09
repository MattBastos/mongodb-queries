// Returns the "name" of all snacks that have "calories" below 500.

db.produtos.find(
  { valoresNutricionais: {
      $elemMatch: {
        tipo: "calorias",
        quantidade: { $lt: 500 },
      },
    },
  },
  { _id: false, nome: true },
);