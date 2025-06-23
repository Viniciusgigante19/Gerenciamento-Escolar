import express from 'express';
import chalk from 'chalk';
import initRelations from './config/sequelize_relations.js';
import "./bootstrap/app.js";
import routes from './routes/routes.js'
import runMigrations from './initNode/runMigrations.js';
import runSeeds from './initNode/runSeeds.js';
import { waitForPostgres } from './wait-for-it.js';

async function startServer() {
    try {
        await waitForPostgres();  // Espera o Postgres ficar pronto

        initRelations(); // Inicializa as relações do Sequelize

        await runMigrations(); // Executa as migrações do banco de dados

        await runSeeds(); // Executa os seeds do banco de dados

        const app = express(); 

        app.use(express.json());

        app.use("/", routes);

        const webPort = process.env.PORT || 3000;
        const nodePort = process.env.NODE_PORT || webPort;

        app.listen(nodePort, () => {
            console.log(chalk.green(`Servidor: http://localhost:${webPort}`));
        });
    } catch (error) {
        console.error(chalk.red('Error starting the server:'), error);
        process.exit(1);
    }
}
startServer();