// seeders/XXXX-seed-responsaveis.js
export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('responsaveis', [
    {
      nome: 'Carlos da Silva',
      telefone: '(11) 91234-5678',
    },
    {
      nome: 'Fernanda Oliveira',
      telefone: '(21) 99876-5432',
    },
    {
      nome: 'Roberta Souza',
      telefone: '(31) 98765-4321',
    },
    {
      nome: 'José Martins',
      telefone: '(51) 99999-0000',
    },
    {
      nome: 'Patrícia Lima',
      telefone: '(61) 91111-2222',
    },
  ]);
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('responsaveis', null, {});
}
