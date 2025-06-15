import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.js';

const Responsavel = sequelize.define('Responsavel', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: true,
  }
}, {
  tableName: 'responsaveis',
  timestamps: false,
});

export default Responsavel;
