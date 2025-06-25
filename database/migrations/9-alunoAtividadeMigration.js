export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('alunos_atividades', {
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
    id_atividade: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'atividades',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    status_participacao: {
      type: Sequelize.ENUM('Concluído', 'Faltou', 'Em andamento'),
      allowNull: false,
    },
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('alunos_atividades');
}
