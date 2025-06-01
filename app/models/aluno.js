import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.js';
//id, 
// nome, 
// data_nascimento, 
// responsavel_financeiro, 
// plano_pagamento,
//  id_turma.
//data_matricula
//status
const Aluno = sequelize.define('Aluno',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nome:{
        type:DataTypes.STRING,
        allowNull:false
    },
    data_nascimento:{
        type: DataTypes.DATAONLY,
        allowNull:true
    },
    responsavel_financeiro:{
        type:DataTypes.STRING,
        allowNull:true
    },
    plano_pagamento: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
        isIn: [['mensal', 'trimestral', 'anual']]
     },
     id_turma:{
        type:DataTypes.INTEGER,
        references:{
            model:'turmas',
            key:'id'
        }
     }
}
})