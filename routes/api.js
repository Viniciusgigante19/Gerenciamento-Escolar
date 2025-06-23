import express from 'express';
import { Router } from 'express';
import responsavelApi from './api/responsavelApi.js';
import alunoApi from './api/alunoApi.js'
import presencaApi from './api/presencaApi.js';
import mensalidadeApi from './api/MensalidadeApi.js'

export default function() {
    const router = Router();
    
    router.get('/', (req, res) => {
        res.status(200).json({ message: 'API está funcionando!' });
    });

    router.use('/', alunoApi);
    
    router.use('/', responsavelApi)

    router.use('/', presencaApi)

    router.use('/', mensalidadeApi);
    

    return router;
}
