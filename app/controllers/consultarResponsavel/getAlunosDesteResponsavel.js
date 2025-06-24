import Aluno from '../../models/alunoModel.js';
import Responsavel from '../../models/responsavelAlunoModel.js';

export default async function getAlunosDoResponsavel(req, res) {
  const { id } = req.params;

  try {
    const responsavelComAlunos = await Responsavel.findByPk(id, {
      include: [{
        model: Aluno,
        as: 'alunos' 
      }]
    });

    if (!responsavelComAlunos) {
      return res.status(404).json({ message: 'Responsável não encontrado.' });
    }

    return res.status(200).json(responsavelComAlunos.alunos);
  } catch (error) {
    return res.status(500).json({
      message: 'Erro ao buscar alunos do responsável.',
      erro: error.message
    });
  }
}
