'use server'

import RepositorioUsuario from '@/app/backend/usuario/RepositorioUsuario'

export default async function excluirUsuario(id: string) {
    return RepositorioUsuario.excluir(id)
}