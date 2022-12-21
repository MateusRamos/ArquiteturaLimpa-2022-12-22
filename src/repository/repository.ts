import { InterLivros } from "../entities/entitie-livros";

interface InterRepository {
    find(id: string) : InterLivros;
    append(livro: InterLivros): boolean;
    update(livro: InterLivros): boolean;
}
export { InterRepository }