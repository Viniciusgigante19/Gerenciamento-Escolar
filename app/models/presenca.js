import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.js';

const Presenca = sequelize.define('Presenca', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_aluno: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'alunos',  // nome da tabela alunos
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  data_presenca: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  presente: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  observacao: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: 'presencas',
  timestamps: false
});

export default Presenca;
