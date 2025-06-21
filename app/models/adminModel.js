import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.js';
const Admin = sequelize.define('Admin', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'Admins',
  timestamps: true,
});

export default Admin;
