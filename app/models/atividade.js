import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.js';

const Atividade = sequelize.define('Atividade', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  data_atividade: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  id_turma: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'turmas', // deve bater com o nome real da tabela definido em Turma.js
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  arquivo_anexo: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  responsavel: {
    type: DataTypes.STRING(150),
    allowNull: false
  }
}, {
  tableName: 'atividades',
  timestamps: false
});

export default Atividade;
