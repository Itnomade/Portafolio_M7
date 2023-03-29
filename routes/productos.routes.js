import express from "express";
const router = express.Router();

import { getProducts } from "../controllers/productos.controller.js";

router.get("/productos", getProducts, (req, res) => { });

export default router;