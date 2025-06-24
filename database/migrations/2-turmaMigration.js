// migrations/XXXX-create-turmas.js
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('turmas', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    ano_turma: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    classe: {
      type: Sequelize.STRING(5),
      allowNull: false,
    },
    ano_letivo: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('turmas');
}
