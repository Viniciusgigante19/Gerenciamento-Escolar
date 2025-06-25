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
      model: 'turmas', 
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  arquivo_anexo: {   
    type: DataTypes.STRING(255),
    allowNull: true,           // pode ser nulo caso não tenha arquivo
    comment: 'Caminho relativo do arquivo anexado'
  },
  responsavel: {
    type: DataTypes.STRING(150),
    allowNull: true
  }
}, {
  tableName: 'atividades',
  timestamps: false
});

export default Atividade;
