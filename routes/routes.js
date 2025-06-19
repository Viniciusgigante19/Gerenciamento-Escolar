import express, { Router } from 'express';

export default (function () {
  const router = Router();

  router.use(express.json());

  router.post('/login', (req, res) => {
    res.send('Login endpoint rodando!');
  });

  return router;
})();
