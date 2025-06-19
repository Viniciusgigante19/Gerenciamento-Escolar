//essa pasta api.js contem a rota '/', ela é o inicio de todas as toras do projeto.
//aperte CONTROL e clique no link depois do caminho '/' e sigua o fluxo.
import express from 'express';
import { Router } from 'express';

import alunoApi from './api/alunoApi.js'
import atividadeApi from './api/atividade.js';

export default function() {
    const router = Router()
    
    //rota para api de aluno
    router.use('/', alunoApi)

    //rota para api de atividades
    router.use('/', atividadeApi)

    
};
