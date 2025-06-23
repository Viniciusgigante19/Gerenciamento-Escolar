// migrations/XXXX-create-pagamentos.js
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('pagamentos', {
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
    tipo_pagamento: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    valor: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    data_pagamento: {
      type: Sequelize.DATEONLY,
      allowNull: true,
    },
    status: {
      type: Sequelize.ENUM('Pendente', 'Pago', 'Atrasado'),
      allowNull: false,
    },
    data_vencimento: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    observacao: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('pagamentos');
}
