// Counts how many products have 4 ingredients.

db.produtos.countDocuments({ ingredientes: { $size: 4 } });