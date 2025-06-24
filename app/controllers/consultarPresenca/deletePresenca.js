import Presenca from '../../models/presencaModel.js';

export default async function deletePresenca(req, res) {
  try {
    const { alunoId } = req.params;
    const { data } = req.query;

    if (!data) {
      return res.status(400).json({ erro: 'Parâmetro "data" na query obrigatório' });
    }

    const presenca = await Presenca.findOne({
      where: {
        id_aluno: alunoId,
        data_presenca: data
      }
    });

    if (!presenca) {
      return res.status(404).json({ erro: 'Presença não encontrada para este aluno e data' });
    }

    await presenca.destroy();

    res.status(200).json({ mensagem: 'Presença deletada com sucesso' });
  } catch (error) {
    console.error('Erro ao deletar presença:', error);
    res.status(500).json({ erro: 'Erro interno ao deletar presença' });
  }
}
