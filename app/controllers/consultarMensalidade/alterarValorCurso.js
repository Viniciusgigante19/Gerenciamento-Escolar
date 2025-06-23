import ValoresCurso from '../../models/valorCursoModel.js'; 
import { Op } from 'sequelize';

export default async function atualizarValorCurso(req, res) {
  const { ano_turma, valor, plano_pagamento } = req.body;

  if (!ano_turma || valor === undefined) {
    return res.status(400).json({ error: 'ano_turma e valor são obrigatórios' });
  }

  // Se plano_pagamento foi informado, valida se é válido
  const planosValidos = ['mensal', 'trimestral', 'anual'];
  if (plano_pagamento && !planosValidos.includes(plano_pagamento)) {
    return res.status(400).json({ error: `plano_pagamento inválido. Use um dos: ${planosValidos.join(', ')}` });
  }

  try {
    // Construir filtro do update
    const whereFiltro = { ano_turma };
    if (plano_pagamento) {
      whereFiltro.plano_pagamento = plano_pagamento;
    }

    const [qtdAtualizados] = await ValoresCurso.update(
      { valor },
      { where: whereFiltro }
    );

    if (qtdAtualizados === 0) {
      return res.status(404).json({ message: 'Nenhum registro encontrado para atualizar' });
    }

    return res.json({ message: `Foram atualizados ${qtdAtualizados} registros.` });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao atualizar valores do curso' });
  }
}
