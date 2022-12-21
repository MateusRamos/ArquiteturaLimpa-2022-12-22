import { Request, Response } from "express";

import { InterLivrosUseCase, LivrosUseCase } from "../usecases/livro_usecase";

interface InterLivroController {
    setUseCase(livrosUseCase: LivrosUseCase): void;
    obtem_um(req: Request, resp: Response): void;    
}

class LivroController {
    static livrosUseCase: InterLivrosUseCase;

    static setUseCase(livrosUseCase: LivrosUseCase) {
        LivroController.livrosUseCase = livrosUseCase;
    }

    static obtem_um(req: Request, resp: Response) {
        const { id } = req.params;
        
        const livro = LivroController.livrosUseCase.recupera_livro(id);
        resp.status(200).json( livro );
    }
}

export { InterLivroController, LivroController }