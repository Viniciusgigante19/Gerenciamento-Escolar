//esse arquivo de rotas 'alunoApi' contem rotas para o controller, por sua vez tem rotas para as models, que interage com banco de dados
import { Router } from "express";
import ListAtividadesController from '../../app/controllers/atividadesApi/GetAtividadeController.js'
import GetAtividadeController from '../../app/controllers/atividadesApi/GetAtividadeController.js'

//o link AtividadeApi importa o codgo abaixo
//aperte CONTROL e clique no link depois do caminho '/...' e sigua o fluxo.
export default (function () {

    const router = Router();

    //rota api para listar alunos (Get)
    router.get('/atividades', ListAtividadesController);

    // rota api para listar atividades ()
    router.get('/atividades/id', GetAtividadeController);

    /*
    //rota api para obter atividade por aluno(RA ou ID)
    router.get('/atividade/id', GetAtividadeController )

    // rota api para adicionar atiidade
    router.post('/atividade', InsertAtividadeController);

    // rota api para atualizar atividade
    router.put('/atividade/:id', UpdateAtividadeController);

    // rota api para deletar atividade
    router.delete('/atividade/:id', DeleteAtividadeController);
    */
    return router;

})();