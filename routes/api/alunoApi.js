//esse arquivo de rotas 'alunoApi' contem rotas para o controller, por sua vez tem rotas para as models, que interage com banco de dados
import GetAlunoController from '../../app/controllers/consultarAluno/getAlunoId.js'
import getAlunoByTurma from '../../app/controllers/consultarAluno/getAlunoTurma.js';
import GetTodosAlunosController from '../../app/controllers/consultarAluno/getTodosAlunos.js';
import { Router } from "express";

//o link alunoApi importa o codgo abaixo
//aperte CONTROL e clique no link depois do caminho '/...' e sigua o fluxo.
const router = Router();


router.get('/aluno/:id', GetAlunoController ); //funciona!

router.get('/alunos',GetTodosAlunosController); //funciona!

router.get('/alunos/turma/:nomeTurma', getAlunoByTurma); //funciona!


export default router;