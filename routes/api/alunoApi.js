//esse arquivo de rotas 'alunoApi' contem rotas para o controller, por sua vez tem rotas para as models, que interage com banco de dados
import getAluno from '../../app/controllers/consultarAluno/getAluno.js'
import getAlunoByTurma from '../../app/controllers/consultarAluno/getAlunoTurma.js';
import getTodosAlunos from '../../app/controllers/consultarAluno/getTodosAlunos.js';
import insertAluno from '../../app/controllers/consultarAluno/insertAluno.js';
import updateAluno from '../../app/controllers/consultarAluno/updateAluno.js';
import { Router } from "express";

//o link alunoApi importa o codgo abaixo
//aperte CONTROL e clique no link depois do caminho '/...' e sigua o fluxo.
const router = Router();


router.post('/aluno', getAluno); //Busca aluno ou pelo nome ou pelo id

router.get('/aluno/alunos',getTodosAlunos); //Retorna todos os alunos

router.get('/aluno/turma/:nomeTurma', getAlunoByTurma); //Busca alunos por turma

router.put('/aluno', updateAluno); //Atualiza os dados do aluno

router.post('/aluno', insertAluno); 
//Insere um novo aluno, se ele tiver responsavel financeiro este
// ja deve estar cadastrado no banco de dados antes do aluno! 

export default router;