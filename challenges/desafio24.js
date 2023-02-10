/* Sorts in all documents the values of the "valoresNutricionais"
list by the "percentage" field in descending order. */

db.produtos.updateMany(
  {},
  { $push: {
      valoresNutricionais: {
        $each: [],
        $sort: { percentual: -1 },
      },
    },
  },
);

// Returns products "name" and "nutricionalValues".

db.produtos.find(
  {},
  { _id: false, nome: true, valoresNutricionais: true },
);