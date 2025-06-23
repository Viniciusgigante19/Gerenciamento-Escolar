import sequelize from '../../../config/sequelize.js';
import gerarParcelasPagamento from '../../Middlewares/gerarBoletos.js';
import Responsavel from '../../models/responsavelAlunoModel.js';
import Aluno from '../../models/alunoModel.js';

export default async function cadastrarAlunoComBoletos(req, res) {
  const {
    nome,
    data_nascimento,
    plano_pagamento,
    ano_turma,
    classe,
    responsavel_id,
    data_matricula,
    status
  } = req.body;

  if (!data_matricula) {
    return res.status(400).json({ error: "Data de matrícula é obrigatória." });
  }

  const t = await sequelize.transaction();

  try {
    // Verifica responsável (se informado)
    if (responsavel_id) {
      const resp = await Responsavel.findByPk(responsavel_id, { transaction: t });
      if (!resp) {
        await t.rollback();
        return res.status(400).json({ error: 'Responsável financeiro não encontrado.' });
      }
    }

    // Verifica se aluno já existe
    const alunoExistente = await Aluno.findOne({ where: { nome }, transaction: t });
    if (alunoExistente) {
      await t.rollback();
      return res.status(400).json({ error: 'Aluno já cadastrado.' });
    }

    // Cria o aluno dentro da transação
    const novoAluno = await Aluno.create({
      nome,
      data_nascimento,
      plano_pagamento,
      ano_turma,
      classe,
      responsavel_id,
      data_matricula,
      status
    }, { transaction: t });

    // Cria os pagamentos dentro da MESMA transação
    const pagamentosGerados = await gerarParcelasPagamento(novoAluno, t);

    // Comita a transação depois que tudo foi criado
    await t.commit();

    return res.status(201).json({
      mensagem: 'Aluno cadastrado e boletos gerados com sucesso!',
      aluno: novoAluno,
      pagamentos: pagamentosGerados
    });

  } catch (error) {
    await t.rollback();
    console.error('Erro ao cadastrar aluno e gerar boletos:', error);
    return res.status(500).json({
      error: 'Erro ao cadastrar aluno e gerar boletos.',
      detalhe: error.errors?.map(e => e.message) || error.message
    });
  }
}
