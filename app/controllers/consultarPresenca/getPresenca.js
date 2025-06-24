import Presenca from '../../models/presencaModel.js';
import { Op } from 'sequelize';

export default async function getPresenca(req, res) {
  try {
    const { inicio, fim } = req.query;

    if (!inicio || !fim) {
      return res.status(400).json({ erro: 'Parâmetros "inicio" e "fim" são obrigatórios' });
    }

    const presencas = await Presenca.findAll({
      where: {
        data_presenca: {
          [Op.between]: [inicio, fim]
        }
      }
    });

    res.status(200).json(presencas);
  } catch (error) {
    console.error('Erro ao buscar presenças por faixa de datas:', error);
    res.status(500).json({ erro: 'Erro interno ao buscar presenças' });
  }
}
