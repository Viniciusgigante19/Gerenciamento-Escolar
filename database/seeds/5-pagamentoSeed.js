// seeders/XXXX-seed-pagamentos.js
export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('pagamentos', [
    // Aluno 1 - mensal (12 pagamentos)
    { id_aluno: 1, tipo_pagamento: 'Mensalidade', valor: 100.00, data_pagamento: '2024-01-05', status: 'Pago', data_vencimento: '2024-01-01', observacao: null },
    { id_aluno: 1, tipo_pagamento: 'Mensalidade', valor: 100.00, data_pagamento: '2024-02-05', status: 'Pago', data_vencimento: '2024-02-01', observacao: null },
    { id_aluno: 1, tipo_pagamento: 'Mensalidade', valor: 100.00, data_pagamento: '2024-03-05', status: 'Pago', data_vencimento: '2024-03-01', observacao: null },
    { id_aluno: 1, tipo_pagamento: 'Mensalidade', valor: 100.00, data_pagamento: '2024-04-05', status: 'Pago', data_vencimento: '2024-04-01', observacao: null },
    { id_aluno: 1, tipo_pagamento: 'Mensalidade', valor: 100.00, data_pagamento: '2024-05-05', status: 'Pago', data_vencimento: '2024-05-01', observacao: null },
    { id_aluno: 1, tipo_pagamento: 'Mensalidade', valor: 100.00, data_pagamento: '2024-06-05', status: 'Pago', data_vencimento: '2024-06-01', observacao: null },
    { id_aluno: 1, tipo_pagamento: 'Mensalidade', valor: 100.00, data_pagamento: '2024-07-05', status: 'Pago', data_vencimento: '2024-07-01', observacao: null },
    { id_aluno: 1, tipo_pagamento: 'Mensalidade', valor: 100.00, data_pagamento: '2024-08-05', status: 'Pago', data_vencimento: '2024-08-01', observacao: null },
    { id_aluno: 1, tipo_pagamento: 'Mensalidade', valor: 100.00, data_pagamento: '2024-09-05', status: 'Pago', data_vencimento: '2024-09-01', observacao: null },
    { id_aluno: 1, tipo_pagamento: 'Mensalidade', valor: 100.00, data_pagamento: '2024-10-05', status: 'Pago', data_vencimento: '2024-10-01', observacao: null },
    { id_aluno: 1, tipo_pagamento: 'Mensalidade', valor: 100.00, data_pagamento: '2024-11-05', status: 'Pago', data_vencimento: '2024-11-01', observacao: null },
    { id_aluno: 1, tipo_pagamento: 'Mensalidade', valor: 100.00, data_pagamento: '2024-12-05', status: 'Pago', data_vencimento: '2024-12-01', observacao: null },

    // Aluno 2 - trimestral (4 pagamentos a cada 3 meses)
    { id_aluno: 2, tipo_pagamento: 'Mensalidade', valor: 300.00, data_pagamento: '2024-01-05', status: 'Pago', data_vencimento: '2024-01-01', observacao: null },
    { id_aluno: 2, tipo_pagamento: 'Mensalidade', valor: 300.00, data_pagamento: '2024-04-05', status: 'Pago', data_vencimento: '2024-04-01', observacao: null },
    { id_aluno: 2, tipo_pagamento: 'Mensalidade', valor: 300.00, data_pagamento: '2024-07-05', status: 'Pago', data_vencimento: '2024-07-01', observacao: null },
    { id_aluno: 2, tipo_pagamento: 'Mensalidade', valor: 300.00, data_pagamento: '2024-10-05', status: 'Pago', data_vencimento: '2024-10-01', observacao: null },

    // Aluno 3 - anual (1 pagamento)
    { id_aluno: 3, tipo_pagamento: 'Mensalidade', valor: 1200.00, data_pagamento: '2024-01-05', status: 'Pago', data_vencimento: '2024-01-01', observacao: null },

    // Aluno 4 - mensal (12 pagamentos)
    { id_aluno: 4, tipo_pagamento: 'Mensalidade', valor: 100.00, data_pagamento: '2024-01-05', status: 'Pago', data_vencimento: '2024-01-01', observacao: null },
    { id_aluno: 4, tipo_pagamento: 'Mensalidade', valor: 100.00, data_pagamento: '2024-02-05', status: 'Pago', data_vencimento: '2024-02-01', observacao: null },
    { id_aluno: 4, tipo_pagamento: 'Mensalidade', valor: 100.00, data_pagamento: '2024-03-05', status: 'Pago', data_vencimento: '2024-03-01', observacao: null },
    { id_aluno: 4, tipo_pagamento: 'Mensalidade', valor: 100.00, data_pagamento: '2024-04-05', status: 'Pago', data_vencimento: '2024-04-01', observacao: null },
    { id_aluno: 4, tipo_pagamento: 'Mensalidade', valor: 100.00, data_pagamento: '2024-05-05', status: 'Pago', data_vencimento: '2024-05-01', observacao: null },
    { id_aluno: 4, tipo_pagamento: 'Mensalidade', valor: 100.00, data_pagamento: '2024-06-05', status: 'Pago', data_vencimento: '2024-06-01', observacao: null },
    { id_aluno: 4, tipo_pagamento: 'Mensalidade', valor: 100.00, data_pagamento: '2024-07-05', status: 'Pago', data_vencimento: '2024-07-01', observacao: null },
    { id_aluno: 4, tipo_pagamento: 'Mensalidade', valor: 100.00, data_pagamento: '2024-08-05', status: 'Pago', data_vencimento: '2024-08-01', observacao: null },
    { id_aluno: 4, tipo_pagamento: 'Mensalidade', valor: 100.00, data_pagamento: '2024-09-05', status: 'Pago', data_vencimento: '2024-09-01', observacao: null },
    { id_aluno: 4, tipo_pagamento: 'Mensalidade', valor: 100.00, data_pagamento: '2024-10-05', status: 'Pago', data_vencimento: '2024-10-01', observacao: null },
    { id_aluno: 4, tipo_pagamento: 'Mensalidade', valor: 100.00, data_pagamento: '2024-11-05', status: 'Pago', data_vencimento: '2024-11-01', observacao: null },
    { id_aluno: 4, tipo_pagamento: 'Mensalidade', valor: 100.00, data_pagamento: '2024-12-05', status: 'Pago', data_vencimento: '2024-12-01', observacao: null },

    // Aluno 5 - trimestral (4 pagamentos)
    { id_aluno: 5, tipo_pagamento: 'Mensalidade', valor: 300.00, data_pagamento: '2024-01-05', status: 'Pago', data_vencimento: '2024-01-01', observacao: null },
    { id_aluno: 5, tipo_pagamento: 'Mensalidade', valor: 300.00, data_pagamento: '2024-04-05', status: 'Pago', data_vencimento: '2024-04-01', observacao: null },
    { id_aluno: 5, tipo_pagamento: 'Mensalidade', valor: 300.00, data_pagamento: '2024-07-05', status: 'Pago', data_vencimento: '2024-07-01', observacao: null },
    { id_aluno: 5, tipo_pagamento: 'Mensalidade', valor: 300.00, data_pagamento: '2024-10-05', status: 'Pago', data_vencimento: '2024-10-01', observacao: null },
  ]);
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('pagamentos', null, {});
}
