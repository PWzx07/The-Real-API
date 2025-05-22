import { getUsuario } from "../service/usuario.service.js";

class UsuarioController {
    // READ - GET
    async getUsuarioController(req,res){
        const usuario = await getUsuario();

        res.status(200).json({mensagem: "Todos os usuarios", usuario});
    }
}

export default new UsuarioController();