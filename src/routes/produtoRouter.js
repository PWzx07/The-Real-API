import express from "express";
import { exibirProdutos } from "../controllers/produto.controller.js";

const router = express.Router() 

router.get("/", exibirProdutos);
//router.get("/ID", * )

export default router;