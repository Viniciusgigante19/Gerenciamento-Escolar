//esse arquivo de rotas 'alunoApi' contem rotas para o controller, por sua vez tem rotas para as models, que interage com banco de dados
import { Router } from "express";
import ListAlunosController from '../../app/controllers/alunoApi/listAlunoController'


//o link alunoApi importa o codgo abaixo
//aperte CONTROL e clique no link depois do caminho '/...' e sigua o fluxo.
export default (function () {

    const router = Router();

    //roda api para listar alunos (Get)
    router.get('/alunos', ListAlunosController);

})();