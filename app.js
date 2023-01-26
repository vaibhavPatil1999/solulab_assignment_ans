import express from "express";
import emoji from "node-emoji";
import { logger } from "./logger.js";
import { healthCheck } from "./routes/health_check.js";
import { router as products } from "./routes/product.js";
import { router as category } from "./routes/category.js";
import { category as category_db } from "./models/category.js";
import { products as products_db } from "./models/products.js";
import { connection } from "./config/connection.js";
const app = express();
const port = process.env.port || 3000;
app.use(express.json());
app.use(healthCheck());
app.use("/products", products);
app.use("/category", category);
category_db.hasMany(products_db);
products_db.belongsTo(category_db);
connection
  .sync()
  .then(() => {
    console.log(`connected to database ${emoji.get("notebook")}..`);
  })
  .catch((err) => {
    console.log("not connected", err);
  });
app
  .listen(port, () => {
    logger.info(`Server started on ${port} ${emoji.get("checkered_flag")}`);
    console.log(`Server started on ${port} ${emoji.get("checkered_flag")}`);
  })
  .on("error", (err) => {
    logger.error(`Server failed due to ${err} ${emoji.get("no_entry_sign")}`);
    console.log(`Server failed due to ${err} ${emoji.get("no_entry_sign")}`);
  });
