import { Router } from "express";
import productsRoutes from "./productsRoutes.js";
import cartsRoutes from "./cartsRoutes.js";
import { userRoleMiddleware } from "../middlewares/userRoleMiddleware.js";

const router = Router();

router.use("/carts", cartsRoutes);
// Middleware a nivel router
router.use(userRoleMiddleware)
router.use("/products", productsRoutes);

export default router;