import express from "express";
import { exibirProdutos, exibirId, enviarProduto, deletarId } from "../controllers/produto.controller.js";

const router = express.Router() 

router.get("/", exibirProdutos);
router.get("/:id", exibirId);
router.post("/cadastrar", enviarProduto);
router.delete("/deletar/:id", deletarId);

export default router;