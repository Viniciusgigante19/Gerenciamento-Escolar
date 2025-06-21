import aluno from '../../models/alunoModel.js';
import responsavel from '../../models/responsavelModel.js';

export default async function InsertAluno(req, res) {
  const { nome, data_nascimento, plano_pagamento, id_turma, responsavelNome, data_matricula, status } = req.body;

  try {
    const existingAluno = await aluno.findOne({ where: { nome } });
    if (existingAluno) {
      return res.status(400).json({ error: 'Aluno já cadastrado.' });
    }

    let responsavel_id = null;

    if (responsavelNome) {
      const resp = await responsavel.findOne({ where: { nome: responsavelNome } });
      if (!resp) {
        return res.status(400).json({ error: 'Responsável não encontrado.' });
      }
      responsavel_id = resp.id;
    }

    const newAluno = await aluno.create({
      nome,
      data_nascimento,
      plano_pagamento,
      id_turma,
      responsavel_id,
      data_matricula,
      status,
    });

    return res.status(201).json(newAluno);

  } catch (error) {
    console.error('Erro ao inserir aluno:', error);
    return res.status(500).json({ error: 'Erro ao inserir aluno.' });
  }
}
