import { Router } from "express";
import usuarioController from "../controller/usuario.controller.js";

const router = Router();

router.get("/", usuarioController.getUsuarioController);

export default router; 