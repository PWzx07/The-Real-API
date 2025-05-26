import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//READ - GET
export async function getUsuario() {
    const rows = await prisma.usuarios.findMany();
    return rows;
}

//  FILTER - GET
export async function filterUsuario(id) {
    const row = await prisma.usuarios.findUnique({where:{id}});
    return row;
}

// CREATE - POST
export async function createUsuario(db){
   const newUsuario = prisma.usuarios.create({
        data: {
            nome: db.nome,
            email: db.email,
            senha: db.senha,
            tipo: db.tipo,
        }
   });
    return newUsuario;
}