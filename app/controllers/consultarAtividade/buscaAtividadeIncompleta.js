import alunoAtividade from '../../models/alunoAtividadeModel.js';
import atividade from '../../models/atividadeModel.js';

export default async function buscaAtividadesIncompletas(req, res) {
  try {
    const { id } = req.params;

    const atividades = await alunoAtividade.findAll({
      where: {
        id_aluno: id,
        status_participacao: ['Em andamento', 'Faltou']  // incompletas
      },
      include: [
        {
          model: atividade,
          attributes: ['descricao', 'data_atividade', 'arquivo_anexo', 'responsavel'],
        }
      ],
    });

    return res.status(200).json(atividades);
  } catch (error) {
    console.error('Erro ao buscar atividades incompletas:', error);
    return res.status(500).json({ error: 'Erro interno no servidor' });
  }
}
