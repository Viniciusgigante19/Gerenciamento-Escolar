import aluno from '../../models/alunoModel.js';

export default async function GetAlunoController(req, res) {
  try {
    const { id, nome } = req.body;

    let alunoEncontrado = null;

    if (id) {
      alunoEncontrado = await aluno.findByPk(id);
    } else if (nome) {
      alunoEncontrado = await aluno.findOne({ where: { nome } });
    } else {
      return res.status(400).json({ mensagem: "Informe o 'id' ou o 'nome' no corpo da requisição." });
    }

    if (!alunoEncontrado) {
      return res.status(404).json({ mensagem: "Aluno não encontrado." });
    }

    res.json({
      mensagem: "Aluno encontrado com sucesso!",
      aluno: alunoEncontrado
    });

  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao buscar aluno.", erro: error.message });
  }
}
