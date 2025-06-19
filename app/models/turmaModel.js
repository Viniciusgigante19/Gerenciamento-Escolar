import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.js';

const Turma = sequelize.define('Turma',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nome:{
        type:DataTypes.STRING, // Exemplo : 2°B , 1°A.
        allowNull:false
    },
    ano_letivo:{
        type:DataTypes.STRING(4),// ano como texto de 4 dígitos (ex: "2025")
        allowNull:false
    }
},{
        tableName:'turmas'
    });

export default Turma;