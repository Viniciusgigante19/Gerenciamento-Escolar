// seeders/XXXX-seed-valorCurso.js

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('valores_curso', [
    // Ano 1
    { ano_turma: 1, plano_pagamento: 'anual', valor: 600 },
    { ano_turma: 1, plano_pagamento: 'trimestral', valor: 600 },
    { ano_turma: 1, plano_pagamento: 'mensal', valor: 600 },

    // Ano 2
    { ano_turma: 2, plano_pagamento: 'anual', valor: 800 },
    { ano_turma: 2, plano_pagamento: 'trimestral', valor: 800 },
    { ano_turma: 2, plano_pagamento: 'mensal', valor: 800 },

    // Ano 3
    { ano_turma: 3, plano_pagamento: 'anual', valor: 1000 },
    { ano_turma: 3, plano_pagamento: 'trimestral', valor: 1000 },
    { ano_turma: 3, plano_pagamento: 'mensal', valor: 1000 },

    // Ano 4
    { ano_turma: 4, plano_pagamento: 'anual', valor: 1200 },
    { ano_turma: 4, plano_pagamento: 'trimestral', valor: 1200 },
    { ano_turma: 4, plano_pagamento: 'mensal', valor: 1200 },

    // Ano 5
    { ano_turma: 5, plano_pagamento: 'anual', valor: 1400 },
    { ano_turma: 5, plano_pagamento: 'trimestral', valor: 1400 },
    { ano_turma: 5, plano_pagamento: 'mensal', valor: 1400 },
  ]);
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('valorCurso', null, {});
}
