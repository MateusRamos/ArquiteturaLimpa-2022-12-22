import { InterLivros, Livro } from "../entities/entitie-livros"

interface InterLivrosUseCase {
    status: string;
    recupera_produto(id: string): InterLivros;
}

class LivrosUseCase {
    status: string;
    constructor() {
        this.status = 'online';
    }

    recupera_produto(id: string): InterLivros {
        const liv = new Livro('1', 'O Hobbit', 'J. R. R. Tolkien', 'Aventura', 189920919819181);
        return liv;
    }
}

export { InterLivrosUseCase, LivrosUseCase }