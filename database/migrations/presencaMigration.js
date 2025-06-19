// migrations/XXXX-create-presencas.js
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('presencas', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    id_aluno: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'alunos',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    data_presenca: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    presente: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    observacao: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('presencas');
}
