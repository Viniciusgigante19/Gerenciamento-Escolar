//esse arquivo de rotas 'alunoApi' contem rotas para o controller, por sua vez tem rotas para as models, que interage com banco de dados
import { Router } from "express";
import ListAlunosController from '../../app/controllers/alunoApi/listAlunoController.js'
import GetAlunoController from '../../app/controllers/alunoApi/GetAlunoController.js'
import InsertAlunoController from '../../app/controllers/alunoApi/insertAlunoController.js'
import UpdateAlunoController from '../../app/controllers/alunoApi/updateAlunoController.js'

//o link alunoApi importa o codgo abaixo
//aperte CONTROL e clique no link depois do caminho '/...' e sigua o fluxo.
export default (function () {

    const router = Router();

    //rota api para listar alunos (Get)
    router.get('/alunos', ListAlunosController);

    //rota api para obter aluno por RA
    router.get('/aluno/id', GetAlunoController )

    // rota api para adicionar um aluno
    router.post('/aluno', InsertAlunoController);

    // rota api para atualizar um aluno
    router.put('/aluno/:id', UpdateAlunoController);

    // rota api para deletar um aluno
    router.delete('/aluno/:id', DeleteAlunoController);

    return router;

})();