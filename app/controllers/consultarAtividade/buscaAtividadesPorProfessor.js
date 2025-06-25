import atividade from '../../models/atividadeModel.js';

export default async function buscaAtividadesPorProfessor(req, res) {
  try {
    const { nome } = req.params;

    const atividades = await atividade.findAll({
      where: {
        responsavel: nome
      },
      attributes: ['id', 'descricao', 'data_atividade', 'arquivo_anexo', 'responsavel']
    });

    return res.status(200).json(atividades);
  } catch (error) {
    console.error('Erro ao buscar atividades por professor:', error);
    return res.status(500).json({ error: 'Erro interno no servidor' });
  }
}
