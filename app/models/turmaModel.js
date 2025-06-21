import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.js';

const Turma = sequelize.define('Turma', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ano_letivo: {
    type: DataTypes.STRING(4),
    allowNull: false
  }
}, {
  tableName: 'turmas',
  timestamps: false
});

export default Turma;
