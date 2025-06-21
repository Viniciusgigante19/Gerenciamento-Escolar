import { Router } from 'express';
import GetResponsavelController from '../../app/controllers/responsavelApi/getResponsavelController.js';
import InsertResponsavelController from '../../app/controllers/responsavelApi/insertResponsavelController.js';
import UpdateResponsavelController from '../../app/controllers/responsavelApi/updateResponsavelController.js';
import DeleteResponsavelController from '../../app/controllers/responsavelApi/deleteResponsavel.js';

const router = Router();

router.get('/responsaveis', GetResponsavelController);
router.get('/responsavel/:id', GetResponsavelController )
router.post('/responsavel', InsertResponsavelController);
router.put('/responsavel/:id', UpdateResponsavelController);
router.delete('/resonsavel/:id', DeleteResponsavelController);

export default router;