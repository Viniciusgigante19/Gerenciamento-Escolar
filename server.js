import express from 'express';
import chalk from 'chalk';
import initRelations from './config/sequelize_relations.js';
import "./bootstrap/app.js";
import routes from './routes/routes.js'
import runMigrations from './runMigrations.js';
import runSeeds from './runSeeds.js';

async function startServer()
{
    try{
        initRelations();

        await runMigrations();

        await runSeeds();


        const app = express();
        app.use(express.json());

        app.use("/",routes);

        const webPort = process.env.PORT || 3000;

        const nodePort = process.env.NODE_PORT || webPort;

        app.listen(nodePort,() => {
            console.log(chalk.green(`Servidor: http://localhost:${webPort}`));
        })
    } catch (error) {
        console.error(chalk.red('Error starting the server:'), error);
        process.exit(1); // Exit the process with failure
    }
}

startServer();