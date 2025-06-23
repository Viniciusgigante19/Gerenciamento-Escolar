import aluno from '../../models/alunoModel.js';

export default async function updateAluno(req, res) {
  const { id } = req.params;
  const dadosParaAtualizar = req.body;

  try {
    if (Object.keys(dadosParaAtualizar).length === 0) {
      return res.status(400).json({ mensagem: "Nenhum dado para atualizar." });
    }

    // Opcional: validar se os campos ano_turma e classe são válidos
    if ('ano_turma' in dadosParaAtualizar && isNaN(dadosParaAtualizar.ano_turma)) {
      return res.status(400).json({ mensagem: "Ano da turma deve ser um número válido." });
    }

    if ('classe' in dadosParaAtualizar && typeof dadosParaAtualizar.classe !== 'string') {
      return res.status(400).json({ mensagem: "Classe deve ser uma letra válida." });
    }

    const [linhasAtualizadas] = await aluno.update(dadosParaAtualizar, {
      where: { id }
    });

    if (linhasAtualizadas === 0) {
      return res.status(404).json({ mensagem: "Aluno não encontrado." });
    }

    const alunoAtualizado = await aluno.findByPk(id);

    res.json({
      mensagem: "Aluno atualizado com sucesso!",
      aluno: alunoAtualizado
    });

  } catch (error) {
    console.error("Erro ao atualizar aluno:", error);
    res.status(500).json({ mensagem: "Erro ao atualizar aluno.", erro: error.message });
  }
}
