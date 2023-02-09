// Deletes snacks with less than 50 "likes".

db.produtos.deleteMany({ curtidas: { $lt: 50 } });

// Returns the "name" of snacks left in the data base.

db.produtos.find(
  {},
  { _id: false, nome: true },
);