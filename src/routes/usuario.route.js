import { Router } from "express";
import usuarioController from "../controller/usuario.controller.js";

const router = Router();

//READ das rotas 
/**
 * @swagger
 * /usuario:
 *   get:
 *     summary: Lista todos os Usuario cadastrados
 *     tags:
 *      - Usuario
 *     responses:
 *       200:
 *         description: Lista todos os Usuario cadastrados
 *       404:
 *         description: Nenhum Usuario encontrado 
 */
router.get("/", usuarioController.getUsuarioController);

export default router; 