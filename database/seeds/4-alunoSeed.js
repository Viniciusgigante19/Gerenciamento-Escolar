export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('alunos', [
    {
      nome: 'Lucas da Silva',
      data_nascimento: '2012-04-15',
      rg: '123456789',
      plano_pagamento: 'mensal',
      ano_turma: 1,
      classe: 'A',
      responsavel_id: 1,
      data_matricula: '2025-02-01',
      status: 'ativo',
    },
    {
      nome: 'Mariana Oliveira',
      data_nascimento: '2011-09-23',
      rg: '987654321',
      plano_pagamento: 'trimestral',
      ano_turma: 2,
      classe: 'B',
      responsavel_id: 2,
      data_matricula: '2025-02-01',
      status: 'ativo',
    },
    {
      nome: 'Pedro Souza',
      data_nascimento: '2010-12-05',
      rg: '456789123',
      plano_pagamento: 'anual',
      ano_turma: 3,
      classe: 'C',
      responsavel_id: 3,
      data_matricula: '2025-02-01',
      status: 'ativo',
    },
    {
      nome: 'Ana Martins',
      data_nascimento: '2012-01-20',
      rg: '321654987',
      plano_pagamento: 'mensal',
      ano_turma: 1,
      classe: 'A',
      responsavel_id: 4,
      data_matricula: '2025-02-02',
      status: 'ativo',
    },
    {
      nome: 'Bruno Lima',
      data_nascimento: '2013-07-10',
      rg: '789123456',
      plano_pagamento: 'trimestral',
      ano_turma: 2,
      classe: 'B',
      responsavel_id: 5,
      data_matricula: '2025-02-03',
      status: 'ativo',
    },
  ]);
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('alunos', null, {});
}
