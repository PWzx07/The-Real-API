import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// READ - GET
export async function getUsuario() {
    const rows = await prisma.usuarios.findMany();
    return rows;
}

//  FILTER - GET
export async function filterUsuario (id) {
    const row = await prisma.usuarios.findMany({where:{id}});
    return row;
}