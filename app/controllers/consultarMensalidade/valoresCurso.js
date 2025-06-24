import ValorCurso from '../../models/valorCursoModel.js';

export default async function listarValoresCursos(req, res) {
  try {
    const valores = await ValorCurso.findAll({
      order: [['ano_turma', 'ASC']]
    });

    const resposta = {};

    valores.forEach(v => {
      if (!resposta[v.ano_turma]) {
        resposta[v.ano_turma] = {
          ano: v.ano_turma,
          mensal: null,
          trimestral: null,
          anual: null
        };
      }
      resposta[v.ano_turma][v.plano_pagamento] = parseFloat(v.valor);
    });

    // Converte o objeto resposta em array para melhor leitura
    const resultadoFinal = Object.values(resposta);

    return res.json(resultadoFinal);
  } catch (error) {
    console.error('Erro ao buscar valores dos cursos:', error);
    return res.status(500).json({ error: 'Erro interno ao buscar valores dos cursos' });
  }
}
