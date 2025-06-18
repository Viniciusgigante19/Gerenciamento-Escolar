import express from 'express';
import chalk from 'chalk';

import "./bootstrap/app.js";
import routes from './routes/routes.js'

const app = express();
app.use(express.json());

app.use("/",routes);

console.log(process.env.IS_CONTAINER);

const webPort = process.env.PORT || 3000;

const nodePort = process.env.NODE_PORT || webPort;

app.listen(nodePort,() => {
    console.log(chalk.green(`Servidor: http://localhost:${webPort}`));
    console.log(chalk.yellow(`Apis Swagger: http://localhost:${webPort}/docs`));
})
