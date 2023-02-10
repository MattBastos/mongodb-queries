/* Inserts the field "vendasPorDia" in all sandwiches.
The value of this field is an array with seven positions.
Each of them represents a day of the week. */

db.produtos.updateMany(
  {},
  {
    $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] },
  },
);

// Increases "Big Mac" sales on Wednesdays by 60.

db.produtos.updateOne(
  { nome: "Big Mac" },
  { $set: { "vendasPorDia.3": 60 } },
);

// Increases sales of all "beef" sandwiches on Saturdays by 120.

db.produtos.updateMany(
  { tags: { $in: ["bovino"] } },
  { $set: { "vendasPorDia.6": 120 } },
);

// Returns products "name" and "salesPerDay".

db.produtos.find(
  {},
  { _id: false, nome: true, vendasPorDia: true },
);