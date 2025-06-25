import { Router } from 'express';
import multer from 'multer';
import buscaAtividadePorAluno from '../../app/controllers/consultarAtividade/buscaAtividadePorAluno.js';
import buscaAtividadeConcluidas from '../../app/controllers/consultarAtividade/buscaAtividadeConcluidas.js';
import buscaAtividadeIncompleta from '../../app/controllers/consultarAtividade/buscaAtividadeIncompleta.js';
import buscaAtividadesPorProfessor from '../../app/controllers/consultarAtividade/buscaAtividadesPorProfessor.js';
import criarAtividade from '../../app/controllers/consultarAtividade/criarAtividade.js';
import { fileFilter } from '../../app/Middlewares/validadorArquivo.js';

const router = Router();

const upload = multer({
  dest: 'storage/documents/',
  limits: { fileSize: 10 * 1024 * 1024 }, // limite de 10 MB
  fileFilter: fileFilter,
});

router.post('/atividades', upload.single('arquivo'), criarAtividade);

router.get('/atividade/aluno/:id',buscaAtividadePorAluno);

router.get('/atividade_concluidas/aluno/:id/',buscaAtividadeConcluidas);

router.get('/atividade_nao_concluidas/aluno/:id', buscaAtividadeIncompleta);

router.get('/atividades/professor/:nome', buscaAtividadesPorProfessor);

export default router;