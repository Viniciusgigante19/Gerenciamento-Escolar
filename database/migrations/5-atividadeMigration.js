export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('atividades', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    descricao: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    data_atividade: {
      type: Sequelize.DATEONLY,
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
    arquivo_anexo: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    responsavel: {
      type: Sequelize.STRING(150),
      allowNull: false,
    },
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('atividades');
}
