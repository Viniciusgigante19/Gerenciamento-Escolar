import { Op } from 'sequelize';
import Aluno from '../../models/alunoModel.js';
import Pagamento from '../../models/pagamentoModel.js';

export default async function getMensalidadesPorStatus(req, res) {
  const { nome, ano, status } = req.body;

  // Validação simples dos parâmetros
  if (!nome || !ano) {
    return res.status(400).json({ error: 'Nome e ano são obrigatórios' });
  }

  // Se status foi passado, valida se é válido
  const statusValidos = ['Pendente', 'Pago', 'Atrasado'];
  if (status && !statusValidos.includes(status)) {
    return res.status(400).json({ error: `Status inválido. Use um dos: ${statusValidos.join(', ')}` });
  }

  try {
    const aluno = await Aluno.findOne({
      where: {
        nome: {
          [Op.iLike]: nome
        }
      }
    });

    if (!aluno) {
      return res.status(404).json({ error: 'Aluno não encontrado' });
    }

    // Construindo filtro de where dinâmico
    const whereFiltro = {
      id_aluno: aluno.id,
      data_vencimento: {
        [Op.gte]: `${ano}-01-01`,
        [Op.lte]: `${ano}-12-31`
      }
    };

    if (status) {
      whereFiltro.status = status;
    }

    const mensalidades = await Pagamento.findAll({
      where: whereFiltro,
      order: [['data_vencimento', 'ASC']]
    });

    return res.json(mensalidades);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao buscar mensalidades' });
  }
}
