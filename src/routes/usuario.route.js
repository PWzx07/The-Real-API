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

//FILTER das rotas
/**
 * @swagger
 * /usuario:
 *   get:
 *     summary: Lista o Usuario cadastrado com um ID unico
 *     tags:
 *      - Usuario
 *     responses:
 *       200:
 *         description: Lista o Usuario cadastrado com um ID unico
 *       404:
 *         description: Nenhum Usuario encontrado 
 */
router.get("/:id", usuarioController.filterUsuarioController);

export default router; 