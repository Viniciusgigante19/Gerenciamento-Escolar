// seeders/XXXX-seed-alunos.js
export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('alunos', [
    {
      id: 1,
      nome: 'Lucas da Silva',
      data_nascimento: '2012-04-15',
      plano_pagamento: 'mensal',
      id_turma: 1,
      responsavel_id: 1,
      data_matricula: '2025-02-01',
      status: 'ativo',
    },
    {
      id: 2,
      nome: 'Mariana Oliveira',
      data_nascimento: '2011-09-23',
      plano_pagamento: 'trimestral',
      id_turma: 2,
      responsavel_id: 2,
      data_matricula: '2025-02-01',
      status: 'ativo',
    },
    {
      id: 3,
      nome: 'Pedro Souza',
      data_nascimento: '2010-12-05',
      plano_pagamento: 'anual',
      id_turma: 3,
      responsavel_id: 3,
      data_matricula: '2025-02-01',
      status: 'ativo',
    },
    {
      id: 4,
      nome: 'Ana Martins',
      data_nascimento: '2012-01-20',
      plano_pagamento: 'mensal',
      id_turma: 1,
      responsavel_id: 4,
      data_matricula: '2025-02-02',
      status: 'ativo',
    },
    {
      id: 5,
      nome: 'Bruno Lima',
      data_nascimento: '2013-07-10',
      plano_pagamento: 'trimestral',
      id_turma: 2,
      responsavel_id: 5,
      data_matricula: '2025-02-03',
      status: 'ativo',
    },
  ]);
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('alunos', null, {});
}
