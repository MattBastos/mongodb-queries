/* Counts how many products contain "Mc" in the name,
without considering uppercase or lowercase letters. */

db.produtos.countDocuments({ nome: { $regex: /Mc/i } });