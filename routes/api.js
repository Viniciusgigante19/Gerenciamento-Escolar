// routes/api.js
import express from 'express';
import { Router } from 'express';

// import alunoApi from './api/alunoApi.js'
// import atividadeApi from './api/atividade.js'

export default function() {
    const router = Router();

    // router.use('/', alunoApi);
    // router.use('/', atividadeApi);

    router.get('/', (req, res) => {
        res.status(200).json({ message: 'API is running' });
    });

    return router; // ✅ ESSENCIAL
}
