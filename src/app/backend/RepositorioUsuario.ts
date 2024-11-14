import { PrismaClient } from "@prisma/client";

export default class RepositorioUsuario {
    private static db: PrismaClient = new PrismaClient()  

    static async listar() {
        return await this.db.usuario.findMany()
    }
    
}