import express, { Router } from 'express';
import loginJwt from  '../app/Middlewares/loginJwt.js'; 
import registrarUser from '../app/Middlewares/registrarUser.js'
import JwtAuthController from '../app/Middlewares/JwtAuthController.js';
import LogMiddleware from '../app/Middlewares/LogMiddleware.js';
import api from './api.js';

export default (function () {
  const router = Router();

  router.use(express.json());

  router.post('/login',loginJwt); 
  // Efetua o login verificando a existencia 
  // email e senha do usuario no banco;

  router.post('/registrar',registrarUser);
  // Registra um novo usuario no banco de dados
  // inserindo email e senha;

  // Rota protegida - Vem depois da altenticação
    router.use('/api',JwtAuthController,LogMiddleware,api())

  return router;
})();
