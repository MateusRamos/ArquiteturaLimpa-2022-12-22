
//Interface Livros:
interface InterLivros {
    id: string;
    descricao: string;
    autor: string;
    genero: string;
    codigoBarras: number;
}

//Classe principal Livros:
class Livro implements InterLivros {

    id: string;
    descricao: string;
    autor: string;
    genero: string;
    codigoBarras: number;

    constructor(id:string, descricao:string, autor:string, genero:string, codigoBarras:number) {
        this.id = id;
        this.descricao = descricao;
        this.autor = autor;
        this.genero = genero;
        this.codigoBarras = codigoBarras;
    }

}

export { InterLivros, Livro }