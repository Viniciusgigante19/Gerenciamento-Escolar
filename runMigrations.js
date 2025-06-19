import { Sequelize } from 'sequelize';
import path from 'path';
import { readdir } from 'fs/promises';

import sequelize from './config/sequelize.js';

export default async function()
{
    try{
        const migrationsPath = path.resolve('database', 'migrations');
        const files = (await readdir(migrationsPath))
      .filter(file => file.endsWith('.js'))
      .sort();  // ordena pela numeração do nome do arquivo

      for (const file of files) {
      const migration = await import(path.join(migrationsPath, file));
      if (typeof migration.up === 'function') {
        console.log(`Running migration ${file}...`);
        await migration.up(sequelize.getQueryInterface(), Sequelize);
      }
    }
    console.log('Migrations executadas com sucesso!');
    }catch (error) {
        console.error('Erro ao executar migrations:', err);
    }
};

runMigrations();