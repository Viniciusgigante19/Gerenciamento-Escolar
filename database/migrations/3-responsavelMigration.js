// migrations/XXXX-create-responsaveis.js
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('responsaveis', {
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
    telefone: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    rg: {
      
    },
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('responsaveis');
}
