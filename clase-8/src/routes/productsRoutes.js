import { Router } from "express";
import { ProductManager } from "../managers/ProductManager.js";

// Ejecutamos nuestro router
const router = Router();

const productsManager = new ProductManager();

router.get("/", async (req, res) => {
  const products = await productsManager.getProducts();

  res.status(200).json({ status: "ok", payload: products });
});

router.post("/", async (req, res) => {
    const body = req.body;

    const products = await productsManager.addProduct(body);

  res.status(201).json({ status: "ok", payload: products });
});

router.get("/:pid", async (req, res) => {
  const { pid } = req.params;

  const product = await productsManager.getProductById(Number(pid));
  if(!product) return res.status(404).json({ status: "error", message: "Product not found" });

  res.status(200).json({ status: "ok", payload: product });
});

router.get("/:pid", async (req, res) => {
  const { pid } = req.params;

  const product = await productsManager.getProductById(Number(pid));
  if(!product) return res.status(404).json({ status: "error", message: "Product not found" });

  res.status(200).json({ status: "ok", payload: product });
});

router.get("/:pid", async (req, res) => {
  const { pid } = req.params;

  const product = await productsManager.getProductById(Number(pid));
  if(!product) return res.status(404).json({ status: "error", message: "Product not found" });

  res.status(200).json({ status: "ok", payload: product });
});

export default router;
