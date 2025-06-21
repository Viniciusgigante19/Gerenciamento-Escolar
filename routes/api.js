// routes/api.js
import express from 'express';
import { Router } from 'express';

import alunoApi from './api/alunoApi.js'
import atividadeApi from './api/atividade.js'
// import responsavelApi from './api/responsavelApi.js'

export default function() {
    const router = Router();
    
    router.get('/', (req, res) => {
        res.status(200).json({ message: 'API está funcionando!' });
    });

    router.use('/', alunoApi);
    // router.use('/', atividadeApi);

    return router;
}
