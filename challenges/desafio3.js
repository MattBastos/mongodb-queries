// Return the best selling snack, showing only the "name" and "quantity".

db.produtos.find(
  {},
  { _id: false, nome: true, vendidos: true },
).sort({ vendidos: -1 }).limit(1);