import { Router } from "express";
import { userRoleMiddleware } from "../middlewares/userRoleMiddleware.js";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({ status: "ok", payload: "Get all carts" });
});

router.post("/", userRoleMiddleware, (req, res) => {
  res.status(200).json({ status: "ok", payload: "Carrito agregado" });
});

export default router;
