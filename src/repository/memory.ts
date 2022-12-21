import { InterLivros } from "../entities/entitie-livros";
import { InterRepository } from "./repository";


class MemoryRepo implements InterRepository {
    registros: Array<InterLivros>;
    constructor() {
        this.registros = [];
    }

    private findIndex(id:string) : number {
        const livrIndex = this.registros.findIndex(prod => prod.id == id)
        return livrIndex;
    }

    find(id: string) : InterLivros {
        const livrIndex = this.findIndex(id);
        return this.registros[livrIndex];
    }

    append(livro: InterLivros): boolean {
        this.registros.push(livro);
        return true;
    }

    update(livro: InterLivros): boolean {
        const livrIndex = this.findIndex(livro.id);
        this.registros[livrIndex] = livro;
        return true;
    }
}