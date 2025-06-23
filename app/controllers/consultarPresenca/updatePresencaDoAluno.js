import Presenca from '../../models/presencaModel.js';

export default async function updatePresenca(req, res) {
  try {
    const { alunoId } = req.params;
    const { data } = req.query;
    const { presente, observacao, nova_data } = req.body;

    console.log('Parâmetros recebidos:', {
      alunoId,
      data,
      presente,
      observacao,
      nova_data
    });

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
      return res.status(404).json({ erro: 'Registro de presença não encontrado para esse aluno e data' });
    }

    if (presente !== undefined) presenca.presente = presente;
    if (observacao !== undefined) presenca.observacao = observacao;
    if (nova_data !== undefined) presenca.data_presenca = nova_data;

    await presenca.save();

    return res.status(200).json({ mensagem: 'Presença atualizada com sucesso', presenca });

  } catch (error) {
    console.error('Erro ao atualizar presença:', error);
    return res.status(500).json({ 
      erro: 'Erro interno ao atualizar presença',
      detalhe: error.message
    });
  }
}
