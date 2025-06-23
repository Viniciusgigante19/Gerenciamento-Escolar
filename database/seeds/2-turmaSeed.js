export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('turmas', [
    { id: 1, ano_turma: 1, classe: 'A', ano_letivo: '2025' },
    { id: 2, ano_turma: 2, classe: 'B', ano_letivo: '2025' },
    { id: 3, ano_turma: 3, classe: 'C', ano_letivo: '2025' },
  ]);
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('turmas', null, {});
}
