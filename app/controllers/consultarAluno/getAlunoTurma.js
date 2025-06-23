import aluno from '../../models/alunoModel.js';

export default async function getAlunoByTurma(req, res) {
  try {
    const { ano, classe } = req.params;

    const alunos = await aluno.findAll({
      where: {
        ano_turma: Number(ano),
        classe: classe.toUpperCase()
      },
      attributes: ['id', 'nome', 'ano_turma', 'classe', 'status']
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
