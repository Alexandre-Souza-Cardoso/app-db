import salvarUsuario from "./usuario/salvarUsuario";
import obterTodos from "./usuario/obterTodos";

// Padrão Facede
export default class Backend {
    static readonly usuarios = {
        salvar: salvarUsuario,
        obter: obterTodos,
    }
}