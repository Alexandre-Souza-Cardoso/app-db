import { Usuario } from "@/core/model/Usuario";
import Image from 'next/image'

export interface LinhaUsuarioProps {
    usuario: Usuario
    onClick?: (usuario: Usuario) => void
}

export default function LinhaUsuario(props: LinhaUsuarioProps) {
    const avatarUrl = props.usuario.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(props.usuario.nome)}&size=80&background=random`;
    return (
        <div
            className="flex bg-zinc-900 items-center gap-5 p-4 rounded-md cursor-pointer"
            onClick={() => props.onClick?.(props.usuario)}
        >

            <Image
                src={avatarUrl}
                width={50}
                height={50}
                className="rounded-full"
                alt="Avatar"
            />
            <div className="flex flex-col">
                <span className="text-xl font-bold">{props.usuario.nome}</span>
                <span className="text-sm text-zinc-400">{props.usuario.email}</span>
            </div>
        </div >
    )
}