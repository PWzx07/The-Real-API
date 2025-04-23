import express from "express";
import { exibirProdutos } from "../controllers/produto.controller.js";

const router = express.Router() 

router.get("/", exibirProdutos);

export default router;