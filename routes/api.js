import express from 'express';
import { Router } from 'express';
import responsavelApi from './api/responsavelApi.js';
import alunoApi from './api/alunoApi.js'

export default function() {
    const router = Router();
    
    router.get('/', (req, res) => {
        res.status(200).json({ message: 'API está funcionando!' });
    });

    router.use('/', alunoApi);
    
    router.use('/', responsavelApi)

    return router;
}
