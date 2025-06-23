import { Router } from 'express';
import insertResponsavel from '../../app/controllers/consultarResponsavel/insertResponsavel.js';
import getResponsavel from '../../app/controllers/consultarResponsavel/getResponsavel.js';
import updateResponsavel from '../../app/controllers/consultarResponsavel/updateResponsavel.js';
import getResponsaveis from '../../app/controllers/consultarResponsavel/getResponsaveis.js';
import getAlunosDesteResponsavel from '../../app/controllers/consultarResponsavel/getAlunosDesteResponsavel.js';

const router = Router();

router.get('/responsavel/responsaveis', getResponsaveis);

router.get('/responsavel/:id', getResponsavel);

router.get('/responsavel/alunos/:id', getAlunosDesteResponsavel);

router.post('/responsavel', insertResponsavel);

router.put('/responsavel/:id', updateResponsavel);

export default router;