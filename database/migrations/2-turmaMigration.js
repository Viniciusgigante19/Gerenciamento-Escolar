// migrations/XXXX-create-turmas.js
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('turmas', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ano_letivo: {
      type: Sequelize.STRING(4),
      allowNull: false,
    },
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('turmas');
}
