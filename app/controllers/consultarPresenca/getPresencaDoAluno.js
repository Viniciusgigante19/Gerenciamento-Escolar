import Presenca from '../../models/presencaModel.js';

export default async function getPresencaDoAluno(req, res) {
  try {
    const { id } = req.params;
    const { data } = req.query;

    if (!data) {
      return res.status(400).json({ erro: 'O parâmetro "data" é obrigatório na query' });
    }

    const presenca = await Presenca.findOne({
      where: {
        id_aluno: id,
        data_presenca: data
      }
    });

    if (!presenca) {
      return res.status(404).json({ mensagem: 'Presença não encontrada para este aluno nesta data' });
    }

    res.status(200).json(presenca);
  } catch (error) {
    console.error('Erro ao buscar presença do aluno:', error);
    res.status(500).json({ erro: 'Erro interno ao buscar presença do aluno' });
  }
}
