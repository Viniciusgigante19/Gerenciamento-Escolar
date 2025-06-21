import aluno from '../../models/alunoModel.js';

export default async function updateAluno(req, res) {
  const { id } = req.params;
  const dadosParaAtualizar = req.body; // pega tudo que veio no body

  try {
    if (Object.keys(dadosParaAtualizar).length === 0) {
      return res.status(400).json({ mensagem: "Nenhum dado para atualizar." });
    }

    const [linhasAtualizadas] = await aluno.update(dadosParaAtualizar, {
      where: { id }
    });

    if (linhasAtualizadas === 0) {
      return res.status(404).json({ mensagem: "Aluno não encontrado." });
    }

    // Busca o aluno atualizado para enviar a resposta com dados atuais
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
