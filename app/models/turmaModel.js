import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.js';

const Turma = sequelize.define('Turma', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ano_turma: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  classe: {
    type: DataTypes.STRING(5),
    allowNull: false,
  },
  ano_letivo: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  tableName: 'turmas',
  timestamps: false,
});

export default Turma;
