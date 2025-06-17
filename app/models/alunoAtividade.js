import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.js';

const AlunosAtividades = sequelize.define('AlunosAtividades', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_aluno: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'alunos',  // Nome da tabela alunos
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  id_atividade: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'atividades',  // Nome da tabela atividades
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  status_participacao: {
    type: DataTypes.ENUM('Concluído', 'Faltou', 'Em andamento'),
    allowNull: false
  }
}, {
  tableName: 'alunos_atividades',
  timestamps: false
});

export default AlunosAtividades;
