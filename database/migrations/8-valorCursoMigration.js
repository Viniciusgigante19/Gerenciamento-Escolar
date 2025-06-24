// migrations/XXXX-create-valores-curso.js

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('valores_curso', {
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
    plano_pagamento: {
      type: Sequelize.ENUM('mensal', 'trimestral', 'anual'),
      allowNull: false,
    },
    valor: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
  });
}

export async function down(queryInterface) {
  await queryInterface.dropTable('valores_curso');
  await queryInterface.sequelize.query(`DROP TYPE IF EXISTS "enum_valores_curso_plano_pagamento";`);
}
