// seeders/XXXX-seed-turmas.js
export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('turmas', [
    { id: 1, nome: '1°A', ano_letivo: '2025' },
    { id: 2, nome: '2°B', ano_letivo: '2025' },
    { id: 3, nome: '3°C', ano_letivo: '2025' },
  ]);
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('turmas', null, {});
}
