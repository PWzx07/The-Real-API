import { getUsuario,filterUsuario, createUsuario, updateUsuario } from "../service/usuario.service.js";

class UsuarioController {
    // READ - GET
    async getUsuarioController(req,res){
        const usuario = await getUsuario();

        res.status(200).json({mensagem: "Todos os usuarios", usuario});
    }

    // FILTER - GET:ID
    async filterUsuarioController(req, res){
        const { id } = req.params;
        const usuario = await filterUsuario(id);

        if (!usuario || usuario.length === 0) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado' });
        }
        res.status(200).json({mensagem: "Usuario correspondente", usuario});
    }

    // CREATE - POST
    async createUsuarioController(req, res){
        const {
            nome,
            email,
            senha,
            tipo,
        } = req.body;

        if(
            !nome||
            !email||
            !senha||
            !tipo
        ){
            res.status(400).json({mensagem: "AS informações inseridas são inválidas"});
        }
        try{
            const newUsuario = await createUsuario({
                nome,
                email,
                senha,
                tipo
            });

            res.status(201).json({mensagem:"Usuario criado", newUsuario});
        }catch(error){
            console.error("Erro ao criar usuario:", error);
            res.status(500).json({mensagem:"Erro ao criar usuario"});
        }
    }

    // UPDATE - PUT
    async updateUsuarioController(req, res){
        const { id } = req.params;

        const {
            nome,
            email,
            senha,
            tipo,
        } = req.body;

        if(
            !id||
            !nome||
            !email||
            !senha||
            !tipo
        ){
            res.status(400).json({mensagem: "As informações inseridas são inválidas"});
        }
        try{
            const upUsuario = await updateUsuario(id,{
                nome,
                email,
                senha,
                tipo
            });

            if(!upUsuario)return res.status(404).json({
            message:"Usuario não encontrado"
            });

            res.status(200).json({mensagem:"Usuario atualizado", upUsuario});
        }catch(error){
            console.error("Erro ao atualiza usuario:", error);
            res.status(500).json({mensagem:"Erro ao atualiza usuario"});
        }
    }
}

export default new UsuarioController();