import ValorCurso from '../../app/models/valorCursoModel.js';
import Pagamento from '../../app/models/pagamentoModel.js';

async function gerarParcelasPagamento(aluno, transaction) {
  const { ano_turma, plano_pagamento, data_matricula, id: id_aluno } = aluno;

  // Busca valor do curso para ano_turma
  const valorCurso = await ValorCurso.findOne({ where: { ano_turma } });
  if (!valorCurso) {
    throw new Error(`Valor do curso não encontrado para ano_turma ${ano_turma}`);
  }

  const valorAnual = parseFloat(valorCurso.valor);
  const matriculaDate = new Date(data_matricula);
  const anoMatricula = matriculaDate.getFullYear();
  const ultimoMesAno = 11;
  const mesesRestantes = ultimoMesAno - matriculaDate.getMonth() + 1;

  if (mesesRestantes <= 0) {
    throw new Error('Data da matrícula inválida: meses restantes <= 0');
  }

  const valorProporcional = valorAnual * (mesesRestantes / 12);

  let numParcelas, intervaloMeses;

  switch (plano_pagamento) {
    case 'mensal':
      numParcelas = mesesRestantes;
      intervaloMeses = 1;
      break;
    case 'trimestral':
      numParcelas = Math.ceil(mesesRestantes / 3);
      intervaloMeses = 3;
      break;
    case 'anual':
      numParcelas = 1;
      intervaloMeses = 12;
      break;
    default:
      throw new Error(`Plano de pagamento inválido: ${plano_pagamento}`);
  }

  const valorParcela = parseFloat((valorProporcional / numParcelas).toFixed(2));

  const pagamentos = [];

  for (let i = 0; i < numParcelas; i++) {
    const mesVencimento = matriculaDate.getMonth() + i * intervaloMeses;
    const anoVencimento = anoMatricula + Math.floor(mesVencimento / 12);
    const mesCorrigido = mesVencimento % 12;
    const dataVencimento = new Date(anoVencimento, mesCorrigido, 10);
    const dataVencimentoStr = dataVencimento.toISOString().slice(0, 10);

    pagamentos.push({
      id_aluno,
      tipo_pagamento: plano_pagamento,
      valor: valorParcela,
      data_pagamento: null, // Permite null no model/migration
      status: 'Pendente',
      data_vencimento: dataVencimentoStr,
      observacao: null,
    });
  }

  // Cria os pagamentos dentro da mesma transação
  for (const pagamento of pagamentos) {
    await Pagamento.create(pagamento, { transaction });
  }

  return pagamentos;
}

export default gerarParcelasPagamento;
