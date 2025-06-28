import fs from 'fs';
import path from 'path';
import YAML from 'yamljs';
import deepmerge from 'deepmerge';

export function readSwagger(dir) {
  const absDir = path.isAbsolute(dir) ? dir : path.join(process.cwd(), dir);
  const files = fs.readdirSync(absDir);
  let combinedDoc = {};

  files.forEach(file => {
  if (file.endsWith('.yaml') || file.endsWith('.yml')) {
    const fullPath = path.join(absDir, file);
    const doc = YAML.load(fullPath);
    console.log(`Arquivo: ${file} — Conteúdo:`, doc);
    if (!doc) {
      console.warn(`⚠️ Arquivo ${file} está vazio ou inválido!`);
    }
    combinedDoc = deepmerge(combinedDoc, doc);
  }
});

  return combinedDoc;
}
