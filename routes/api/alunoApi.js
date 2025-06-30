//esse arquivo de rotas 'alunoApi' contem rotas para o controller, por sua vez tem rotas para as models, que interage com banco de dados
import getAluno from '../../app/controllers/consultarAluno/getAluno.js'
import getAlunoByTurma from '../../app/controllers/consultarAluno/getAlunoTurma.js';
import getTodosAlunos from '../../app/controllers/consultarAluno/getTodosAlunos.js';
import insertAluno from '../../app/controllers/consultarAluno/insertAluno.js';
import updateAluno from '../../app/controllers/consultarAluno/updateAluno.js';
import { Router } from "express";

const router = Router();

router.post('/aluno/buscar', getAluno); 

router.get('/aluno/alunos',getTodosAlunos); 

router.get('/alunos/turma/:ano/:classe', getAlunoByTurma);

router.put('/aluno/:id', updateAluno);

router.post('/aluno', insertAluno);  

export default router;