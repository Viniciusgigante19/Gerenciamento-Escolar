import path from 'path';
import { readdir } from 'fs/promises';
import sequelize from './config/sequelize.js';

export default async function runSeeds() {
  try {
    const seedsPath = path.resolve('database', 'seeds');
    const files = (await readdir(seedsPath)).filter(f => f.endsWith('.js')).sort();

    for (const file of files) {
      const seed = await import(path.join(seedsPath, file));
      if (typeof seed.up === 'function') {
        console.log(`Running seed ${file}...`);
        await seed.up(sequelize.getQueryInterface(), sequelize);
      }
    }

    console.log('Seeds executadas com sucesso!');
  } catch (err) {
    console.error('Erro ao executar seeds:', err);
  }
}
