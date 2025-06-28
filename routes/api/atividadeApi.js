import { Router } from 'express';
import buscaAtividadePorAluno from '../../app/controllers/consultarAtividade/buscaAtividadePorAluno.js';
import buscaAtividadeConcluidas from '../../app/controllers/consultarAtividade/buscaAtividadeConcluidas.js';
import buscaAtividadeIncompleta from '../../app/controllers/consultarAtividade/buscaAtividadeIncompleta.js';
import criarAtividade from '../../app/controllers/consultarAtividade/criarAtividade.js';
import criarAtividadeParaAluno from '../../app/controllers/consultarAtividade/criarAtividadeParaAluno.js';
import uploadArquivo from '../../app/Middlewares/uploadArquivo.js'; //

const router = Router();

router.post('/atividade/turma', uploadArquivo.single('arquivo'), criarAtividade);
router.post('/atividade/alunos', uploadArquivo.single('arquivo'), criarAtividadeParaAluno);

router.get('/atividade/aluno/:id', buscaAtividadePorAluno);
router.get('/atividade_concluidas/aluno/:id/', buscaAtividadeConcluidas);
router.get('/atividade_nao_concluidas/aluno/:id', buscaAtividadeIncompleta);

export default router;
