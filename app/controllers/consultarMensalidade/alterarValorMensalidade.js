import Pagamento from '../../models/pagamentoModel.js';

export default async function atualizarValorPagamento(req, res) {
  const { id, valor } = req.body;

  if (!id || valor === undefined) {
    return res.status(400).json({ error: 'id e valor são obrigatórios' });
  }

  try {
    const [qtdAtualizados] = await Pagamento.update(
      { valor },
      { where: { id } }
    );

    if (qtdAtualizados === 0) {
      return res.status(404).json({ error: 'Pagamento não encontrado' });
    }

    return res.json({ message: 'Valor do pagamento atualizado com sucesso' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao atualizar valor do pagamento' });
  }
}
