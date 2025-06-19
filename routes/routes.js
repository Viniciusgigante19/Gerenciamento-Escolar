import express from 'express';
import { Router } from 'express';
import LoginJwtController from '../app/Middlewares/';

export default (function()
{
    const router = Router();

    router.use(express.json());

    //Api

    router.post('/login',)
}
());