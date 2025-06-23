import aluno from '../../models/alunoModel.js';
import turma from '../../models/turmaModel.js';

export default async function GetAluno(req, res) {
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

    // Buscar dados da turma com base no ano_turma e classe do aluno
    const turmaEncontrada = await turma.findOne({
      where: {
        ano_turma: alunoEncontrado.ano_turma,
        classe: alunoEncontrado.classe,
      }
    });

    res.json({
      mensagem: "Aluno encontrado com sucesso!",
      aluno: alunoEncontrado,
      turma: turmaEncontrada || null,
    });

  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao buscar aluno.", erro: error.message });
  }
}
