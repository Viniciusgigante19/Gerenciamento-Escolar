import Aluno from '../../models/alunoModel.js';
import Responsavel from '../../models/responsavelAlunoModel.js';

export default async function getAlunosDoResponsavel(req, res) {
  const { id } = req.params; // id do responsável vindo da requisição

  try {
    const responsavelComAlunos = await Responsavel.findByPk(id, {
      include: [{
        model: Aluno,
        as: 'aluno' // use o alias exato da associação
      }]
    });

    if (!responsavelComAlunos) {
      return res.status(404).json({ message: 'Responsável não encontrado.' });
    }

    return res.status(200).json(responsavelComAlunos.aluno);

  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar alunos do responsável.', erro: error.message });
  }
}
