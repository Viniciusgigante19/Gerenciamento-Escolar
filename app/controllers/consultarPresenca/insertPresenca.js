import Presenca from '../../models/presencaModel.js';

export default async function insertPresenca(req, res) {
  try {
    const { id_aluno, data_presenca, presente, observacao } = req.body;

    if (!id_aluno || !data_presenca || presente === undefined) {
      return res.status(400).json({ erro: 'Campos obrigatórios: id_aluno, data_presenca, presente' });
    }

    // Verificar se já existe presença do aluno nessa data para evitar duplicidade
    const presencaExistente = await Presenca.findOne({
      where: {
        id_aluno,
        data_presenca
      }
    });

    if (presencaExistente) {
      return res.status(409).json({ erro: 'Presença para este aluno nessa data já existe' });
    }

    const novaPresenca = await Presenca.create({
      id_aluno,
      data_presenca,
      presente,
      observacao: observacao || null
    });

    res.status(201).json({ mensagem: 'Presença inserida com sucesso', presenca: novaPresenca });

  } catch (error) {
    console.error('Erro ao inserir presença:', error);
    res.status(500).json({ erro: 'Erro interno ao inserir presença' });
  }
}
