import alunoAtividade from '../../models/alunoAtividadeModel.js';
import atividade from '../../models/atividadeModel.js';

export default async function buscaAtividadesConcluidas(req, res) {
  try {
    const { id } = req.params;

    const atividades = await alunoAtividade.findAll({
      where: {
        id_aluno: id,
        status_participacao: 'Concluído'
      },
      include: [
        {
          model: atividade,
          as: 'atividade',  // precisa ser exatamente o mesmo alias usado na associação
          attributes: ['descricao', 'data_atividade', 'arquivo_anexo', 'responsavel'],
        }
      ],
    });

    return res.status(200).json(atividades);
  } catch (error) {
    console.error('Erro ao buscar atividades concluídas:', error);
    return res.status(500).json({ error: 'Erro interno no servidor' });
  }
}
