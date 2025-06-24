import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.js';

const Aluno = sequelize.define('Aluno', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data_nascimento: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  rg: {
    type: DataTypes.STRING(20),
    allowNull: false, // tornar obrigatório
    unique: true,    // garante que não existam dois alunos com o mesmo RG//
      validate: {
    is: /^\d{9}$/, // Aceita exatamente 9 dígitos numéricos para RG
    },
  },
  plano_pagamento: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      isIn: [['mensal', 'trimestral', 'anual']],
    },
  },
  ano_turma: {        // novo campo para ano da turma (ex: 3)
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  classe: {           // novo campo para classe/período (ex: 'A')
    type: DataTypes.STRING(5),
    allowNull: false,
  },
  responsavel_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'responsaveis',
      key: 'id',
    },
    allowNull: true,
  },
  data_matricula: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'alunos',
  timestamps: false,
});

export default Aluno;
