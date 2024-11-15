import salvarUsuario from "./usuario/salvarUsuario";
import obterTodos from "./usuario/obterTodos";
import excluirUsuario from "../components/usuario/excluirUsuario";

// Padrão Facede
export default class Backend {
    static readonly usuarios = {
        salvar: salvarUsuario,
        obter: obterTodos,
        excluir: excluirUsuario,
    }
}