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
  ano_turma: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Ano escolar da turma associada à atividade'
  },
  classe: {
    type: DataTypes.STRING(5),
    allowNull: true,
    comment: 'Classe (ex: A, B, C)'
  },
  arquivo_anexo: {
    type: DataTypes.STRING(255),
    allowNull: true,
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
