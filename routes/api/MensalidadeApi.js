import { Router } from 'express';
import getMensalidades from '../../app/controllers/consultarMensalidade/getMensalidade.js';
import buscaMensalidades from '../../app/controllers/consultarMensalidade/getMensalidadeStatus.js';
import alterarValorCurso from '../../app/controllers/consultarMensalidade/alterarValorCurso.js';
import valoresCurso from '../../app/controllers/consultarMensalidade/valoresCurso.js';   

const router = Router();

  // POST: Retorna todas as mensalidades do ano
  router.post('/mensalidade', getMensalidades);

  // POST: Buscar mensalidades com filtros (status etc)
  router.post('/mensalidade/buscar', buscaMensalidades);

  // PUT: Alterar valor do curso
  router.put('/mensalidade/valor', alterarValorCurso);

  router.get('/mensalidade/valores/curso',valoresCurso);

  export default router;

