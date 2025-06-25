import alunoAtividade from '../../models/alunoAtividadeModel.js';
import atividade from '../../models/atividadeModel.js';
import { Op } from 'sequelize';

export default async function buscaAtividadesIncompletas(req, res) {
  try {
    const { id } = req.params;

    const atividades = await alunoAtividade.findAll({
      where: {
        id_aluno: id,
        status_participacao: {
          [Op.in]: ['Em andamento', 'Faltou']
        }
      },
      include: [
        {
          model: atividade,
          as: 'atividade',  // use o alias correto aqui
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
