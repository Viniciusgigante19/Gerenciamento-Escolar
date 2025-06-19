// seeders/XXXX-seed-presencas.js
export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('presencas', [
    // Aluno 1
    { id_aluno: 1, data_presenca: '2025-02-10', presente: true, observacao: null },
    { id_aluno: 1, data_presenca: '2025-02-11', presente: true, observacao: null },
    { id_aluno: 1, data_presenca: '2025-02-12', presente: true, observacao: null },
    { id_aluno: 1, data_presenca: '2025-02-13', presente: true, observacao: null },
    { id_aluno: 1, data_presenca: '2025-02-14', presente: true, observacao: null },
    { id_aluno: 1, data_presenca: '2025-02-15', presente: true, observacao: null },
    { id_aluno: 1, data_presenca: '2025-02-16', presente: true, observacao: null },
    { id_aluno: 1, data_presenca: '2025-02-17', presente: true, observacao: null },
    { id_aluno: 1, data_presenca: '2025-02-18', presente: true, observacao: null },
    { id_aluno: 1, data_presenca: '2025-02-19', presente: true, observacao: null },
    { id_aluno: 1, data_presenca: '2025-02-20', presente: true, observacao: null },

    // Aluno 2
    { id_aluno: 2, data_presenca: '2025-02-10', presente: true, observacao: null },
    { id_aluno: 2, data_presenca: '2025-02-11', presente: true, observacao: null },
    { id_aluno: 2, data_presenca: '2025-02-12', presente: true, observacao: null },
    { id_aluno: 2, data_presenca: '2025-02-13', presente: true, observacao: null },
    { id_aluno: 2, data_presenca: '2025-02-14', presente: true, observacao: null },
    { id_aluno: 2, data_presenca: '2025-02-15', presente: true, observacao: null },
    { id_aluno: 2, data_presenca: '2025-02-16', presente: true, observacao: null },
    { id_aluno: 2, data_presenca: '2025-02-17', presente: true, observacao: null },
    { id_aluno: 2, data_presenca: '2025-02-18', presente: true, observacao: null },
    { id_aluno: 2, data_presenca: '2025-02-19', presente: true, observacao: null },
    { id_aluno: 2, data_presenca: '2025-02-20', presente: true, observacao: null },

    // Aluno 3
    { id_aluno: 3, data_presenca: '2025-02-10', presente: true, observacao: null },
    { id_aluno: 3, data_presenca: '2025-02-11', presente: true, observacao: null },
    { id_aluno: 3, data_presenca: '2025-02-12', presente: true, observacao: null },
    { id_aluno: 3, data_presenca: '2025-02-13', presente: true, observacao: null },
    { id_aluno: 3, data_presenca: '2025-02-14', presente: true, observacao: null },
    { id_aluno: 3, data_presenca: '2025-02-15', presente: true, observacao: null },
    { id_aluno: 3, data_presenca: '2025-02-16', presente: true, observacao: null },
    { id_aluno: 3, data_presenca: '2025-02-17', presente: true, observacao: null },
    { id_aluno: 3, data_presenca: '2025-02-18', presente: true, observacao: null },
    { id_aluno: 3, data_presenca: '2025-02-19', presente: true, observacao: null },
    { id_aluno: 3, data_presenca: '2025-02-20', presente: true, observacao: null },

    // Aluno 4
    { id_aluno: 4, data_presenca: '2025-02-10', presente: true, observacao: null },
    { id_aluno: 4, data_presenca: '2025-02-11', presente: true, observacao: null },
    { id_aluno: 4, data_presenca: '2025-02-12', presente: true, observacao: null },
    { id_aluno: 4, data_presenca: '2025-02-13', presente: true, observacao: null },
    { id_aluno: 4, data_presenca: '2025-02-14', presente: true, observacao: null },
    { id_aluno: 4, data_presenca: '2025-02-15', presente: true, observacao: null },
    { id_aluno: 4, data_presenca: '2025-02-16', presente: true, observacao: null },
    { id_aluno: 4, data_presenca: '2025-02-17', presente: true, observacao: null },
    { id_aluno: 4, data_presenca: '2025-02-18', presente: true, observacao: null },
    { id_aluno: 4, data_presenca: '2025-02-19', presente: true, observacao: null },
    { id_aluno: 4, data_presenca: '2025-02-20', presente: true, observacao: null },

    // Aluno 5
    { id_aluno: 5, data_presenca: '2025-02-10', presente: true, observacao: null },
    { id_aluno: 5, data_presenca: '2025-02-11', presente: true, observacao: null },
    { id_aluno: 5, data_presenca: '2025-02-12', presente: true, observacao: null },
    { id_aluno: 5, data_presenca: '2025-02-13', presente: true, observacao: null },
    { id_aluno: 5, data_presenca: '2025-02-14', presente: true, observacao: null },
    { id_aluno: 5, data_presenca: '2025-02-15', presente: true, observacao: null },
    { id_aluno: 5, data_presenca: '2025-02-16', presente: true, observacao: null },
    { id_aluno: 5, data_presenca: '2025-02-17', presente: true, observacao: null },
    { id_aluno: 5, data_presenca: '2025-02-18', presente: true, observacao: null },
    { id_aluno: 5, data_presenca: '2025-02-19', presente: true, observacao: null },
    { id_aluno: 5, data_presenca: '2025-02-20', presente: true, observacao: null },
  ]);
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('presencas', null, {});
}
