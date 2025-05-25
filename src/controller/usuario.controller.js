import { getUsuario,filterUsuario } from "../service/usuario.service.js";

class UsuarioController {
    // READ - GET
    async getUsuarioController(req,res){
        const usuario = await getUsuario();

        res.status(200).json({mensagem: "Todos os usuarios", usuario});
    }

    async filterUsuarioController(req, res){
        const usuario = await filterUsuario();

        res.status(200).json({mensagem: "Usuario correspondente", usuario});
    }
}

export default new UsuarioController();