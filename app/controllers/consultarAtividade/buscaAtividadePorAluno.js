import alunoAtividade from '../../models/alunoAtividadeModel.js';
import atividade from '../../models/atividadeModel.js';

export default async function getAtividadesPorAluno(req, res) {
  try {
    const { id } = req.params;

    const atividades = await alunoAtividade.findAll({
      where: { id_aluno: id },
      include: [
        {
          model: atividade,
          attributes: ['descricao', 'data_atividade', 'arquivo_anexo', 'responsavel'],
        }
      ],
    });

    return res.status(200).json(atividades);
  } catch (error) {
    console.error('Erro ao buscar atividades do aluno:', error);
    return res.status(500).json({ error: 'Erro interno no servidor' });
  }
}
