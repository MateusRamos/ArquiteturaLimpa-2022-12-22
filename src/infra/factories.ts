import { LivroController } from "../controller/livro_controller";
import { InterLivrosUseCase, LivrosUseCase } from "../usecases/livro_usecase";

function criaLivroController() {
    const livrosUseCase: InterLivrosUseCase = new LivrosUseCase();
    LivroController.setUseCase(livrosUseCase);
}

export { criaLivroController }