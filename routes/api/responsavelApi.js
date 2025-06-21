import { Router } from 'express';
import insertResponsavelController from '../../app/controllers/responsavelApi/insertResponsavelController.js';

const router = Router();

router.post('/', insertResponsavelController);

export default router;