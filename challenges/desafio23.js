/* Inserts the "combo" and "tasty" values into the "tags" list
of all sandwiches and sorts the values in ascending order. */

db.produtos.updateMany(
  {},
  { $push: {
      tags: {
        $each: ["combo", "tasty"],
        $sort: 1,
      },
    },
  },
);

// Returns products "name" and "tags".

db.produtos.find(
  {},
  { _id: false, nome: true, tags: true },
);