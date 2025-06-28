import { Router } from 'express';
import getPresenca from '../../app/controllers/consultarPresenca/getPresenca.js';
import getPresencaDoAluno from '../../app/controllers/consultarPresenca/getPresencaDoAluno.js';
import updatePresenca from '../../app/controllers/consultarPresenca/updatePresencaDoAluno.js';
import insertPresenca from '../../app/controllers/consultarPresenca/insertPresenca.js';
import deletePresenca from '../../app/controllers/consultarPresenca/deletePresenca.js';

const router = Router();

router.get('/presenca', getPresenca);
// Use GET /presenca?inicio=2025-02-10&fim=2025-02-20 neste formato!

router.get('/presenca/aluno/:id', getPresencaDoAluno);
// Use GET /presenca/aluno/1?data=2025-06-23 neste formato!

router.post('/presenca', insertPresenca);
// Registrar presença de um aluno

router.put('/presenca/:alunoId', updatePresenca);

router.delete('/presenca/:alunoId', deletePresenca);
// /presenca/10?data=2025-06-22

export default router;
