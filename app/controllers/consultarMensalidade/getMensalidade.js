import { Op } from 'sequelize';
import Aluno from '../../models/alunoModel.js';
import Pagamento from '../../models/pagamentoModel.js';

export default async function getMensalidades(req, res) {
  const { nome, ano } = req.body;

  if (!nome || !ano) {
    return res.status(400).json({ error: 'Nome e ano são obrigatórios' });
  }

  console.log('Recebido nome:', nome);
  console.log('Recebido ano:', ano);

  try {
    // Buscar aluno
    const aluno = await Aluno.findOne({
      where: {
        nome: {
          [Op.iLike]: `%${nome}%`
        }
      }
    });

    console.log('Aluno encontrado:', aluno ? aluno.nome : 'Nenhum');

    if (!aluno) {
      return res.status(404).json({ error: 'Aluno não encontrado' });
    }

    // Buscar mensalidades
    const mensalidades = await Pagamento.findAll({
      where: {
        id_aluno: aluno.id,
        data_vencimento: {
          [Op.gte]: `${ano}-01-01`,
          [Op.lte]: `${ano}-12-31`
        }
      },
      order: [['data_vencimento', 'ASC']]
    });

    console.log('Mensalidades encontradas:', mensalidades.length);

    return res.json(mensalidades);
  } catch (err) {
    console.error('Erro ao buscar mensalidades:', err);
    return res.status(500).json({ error: 'Erro ao buscar mensalidades' });
  }
}
