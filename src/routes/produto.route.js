import express from "express";
import { exibirProdutos, exibirId, enviarProduto, atualizarProduto ,deletarId } from "../controllers/produto.controller.js";

const router = express.Router() 

router.get("/", exibirProdutos);
router.get("/:id", exibirId);
router.post("/cadastrar", enviarProduto);
router.put("/atualizar/:id", atualizarProduto);
router.delete("/deletar/:id", deletarId);

export default router;