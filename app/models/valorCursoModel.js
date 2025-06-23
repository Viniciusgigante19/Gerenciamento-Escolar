import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.js';

const ValorCurso = sequelize.define('ValorCurso', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ano_turma: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  plano_pagamento: {
    type: DataTypes.ENUM('mensal', 'trimestral', 'anual'),
    allowNull: false,
  },
  valor: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
}, {
  tableName: 'valores_curso',
  timestamps: false,
});

export default ValorCurso;
