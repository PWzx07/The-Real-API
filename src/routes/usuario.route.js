import { Router } from "express";
import usuarioController from "../controller/usuario.controller.js";
import { updateUsuario } from "../service/usuario.service.js";

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

//CREATE das rotas
/**
 * @swagger
 * /usuario:
 *   post:
 *     summary: Cria um Usuario novo
 *     tags:
 *      - Usuario
 *     responses:
 *       201:
 *         description: Criado com sucesso
 *       500:
 *         description: Erro ao criar Usuario 
 */
router.post("/registra", usuarioController.createUsuarioController);

//UPDATE das rotas
/**
 * @swagger
 * /usuario:
 *   put:
 *     summary: Atualiza o usuario existente
 *     tags:
 *      - Usuario
 *     responses:
 *       200:
 *         description: Atualizado com sucesso
 *       500:
 *         description: Erro ao atualizar Usuario 
 */
router.put("/atualizar/:id", usuarioController.updateUsuarioController);

export default router; 