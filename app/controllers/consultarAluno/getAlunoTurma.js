import aluno from '../../models/alunoModel.js';
import turma from '../../models/turmaModel.js';
import { Op } from 'sequelize';

export default async function getAlunoByTurma(req, res) {
  try {
    let input = decodeURIComponent(req.params.nomeTurma).toUpperCase();
    input = input.replace(/[^0-9A-Z°]/g, '');
    if (!input.includes('°')) {
      input = input.replace(/^(\d)([A-Z])$/, '$1°$2');
    }

    const turmaEncontrada = await turma.findOne({
      where: {
        nome: { [Op.iLike]: input }
      }
    });

    if (!turmaEncontrada) {
      return res.status(404).json({ mensagem: "Turma não encontrada." });
    }

    const alunos = await aluno.findAll({
      where: { id_turma: turmaEncontrada.id },
      include: [{
        model: turma,
        as: 'turma',
        attributes: ['nome', 'ano_letivo']
      }]
    });

    if (alunos.length === 0) {
      return res.status(404).json({ mensagem: "Nenhum aluno encontrado para esta turma." });
    }

    res.json({
      mensagem: "Alunos encontrados com sucesso!",
      alunos
    });

  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao buscar alunos.", erro: error.message });
  }
}
