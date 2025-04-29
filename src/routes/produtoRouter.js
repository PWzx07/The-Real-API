import express from "express";
import { exibirProdutos, exibirId, enviarProduto } from "../controllers/produto.controller.js";

const router = express.Router() 

router.get("/", exibirProdutos);
router.get("/:id", exibirId);
router.post("/cadastrar", enviarProduto);

export default router;