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
   const newUsuario = await prisma.usuarios.create({
        data: {
            nome: db.nome,
            email: db.email,
            senha: db.senha,
            tipo: db.tipo,
        }
   });
    return newUsuario;
}

// UPDATE - PUT
export async function updateUsuario(id, db){
    const updateUsuario = await prisma.usuarios.update({
        where:{id},
        data:{
            nome: db.nome,
            email: db.email,
            senha: db.senha,
            tipo: db.tipo,
        }
    });
    return updateUsuario;
}

// DELETE - DELETE
export async function deleteUsuario(id){
    const exist = await prisma.usuarios.findUnique({where:{id}});
    if(!exist) return null;

    const deleteUsuario = await prisma.usuarios.delete({where:{id}});
    return deleteUsuario;
}