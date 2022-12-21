import express, { Router } from "express";
import { LivroController } from "./controller/livro_controller";

const app = express();

const route = Router();

const livroController = new LivroController();
route.get('/livro/:id', LivroController.obtem_um)

app.use(express.json());
app.use(route);

app.listen(3000, ()  => {
    console.log("na porta 3000");
});


