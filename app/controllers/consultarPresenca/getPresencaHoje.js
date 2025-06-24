import Presenca from '../../models/presencaModel.js';

export default async function getPresencaHoje(req, res) {
  try {
    const hoje = new Date().toISOString().split('T')[0]; // 'YYYY-MM-DD'

    const presencas = await Presenca.findAll({
      where: { data_presenca: hoje }
    });

    res.status(200).json(presencas);
  } catch (error) {
    console.error('Erro ao buscar presenças de hoje:', error);
    res.status(500).json({ erro: 'Erro interno ao buscar presenças' });
  }
}
