import express from "express";
import { ProductManager } from "./managers/ProductManager.js";
const app = express();

// Middlewares
app.use(express.json()); // Nos permite leer archivos JSON
app.use(express.urlencoded({ extended: true }));

const productsManager = new ProductManager();

app.get("/api/products", async (req, res) => {
  const products = await productsManager.getProducts();

  res.status(200).json({ status: "ok", payload: products });
});

app.post("/api/products", (req, res) => {
  res.status(201).json({ status: "ok", payload: products });
});

app.get("/api/products/:pid", async (req, res) => {
  const { pid } = req.params;

  const product = await productsManager.getProductById(Number(pid));
  if(!product) return res.status(404).json({ status: "error", message: "Product not found" });

  res.status(200).json({ status: "ok", payload: product });
});

app.listen(8080, () => {
  console.log("Server on port 8080");
});
