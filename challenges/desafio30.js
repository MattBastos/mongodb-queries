// Remove "curtidas" field from "Big Mac".

db.produtos.updateOne(
  { nome: "Big Mac" },
  { $unset: { curtidas: "" } },
);

// Returns products "name" and "likes".

db.produtos.find(
  {},
  { _id: false, nome: true, curtidas: true },
);