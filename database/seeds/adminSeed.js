// seeders/XXXX-seed-admins.js
import bcrypt from 'bcrypt';

export async function up(queryInterface, Sequelize) {
  const senhaHash1 = await bcrypt.hash('senha123', 10);
  const senhaHash2 = await bcrypt.hash('admin456', 10);
  const senhaHash3 = await bcrypt.hash('root789', 10);

  await queryInterface.bulkInsert('Admins', [
    {
      nome: 'Admin Um',
      email: 'admin1@example.com',
      senha: senhaHash1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nome: 'Admin Dois',
      email: 'admin2@example.com',
      senha: senhaHash2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nome: 'Admin Três',
      email: 'admin3@example.com',
      senha: senhaHash3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Admins', null, {});
}
