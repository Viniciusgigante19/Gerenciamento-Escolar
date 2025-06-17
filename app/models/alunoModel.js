// Esse arquivo é o Model, ele é chamado pelas rotas do controlador, sua função é interagir com o banco de dados (CRUD).
import sequelize from '../../config/sequelize.js';
import { DataTypes } from 'sequelize';

// Aproveitando diretamente as importações dos models relacionados
import ResponsavelModel from './responsavelModel.js';
import TurmaModel from './turmaModel.js';

// 🔄 Função auto-invocável para garantir a correta inicialização e exportação do model
export default (() => {

    // Definição do modelo Aluno
    const AlunoModel = sequelize.define(
        "AlunoModel",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            data_nascimento: {
                type: DataTypes.DATEONLY,
                allowNull: true
            },
            responsavel_financeiro: {
                type: DataTypes.STRING,
                allowNull: true
            },
            plano_pagamento: {
                type: DataTypes.STRING(50),
                allowNull: false,
                validate: {
                    isIn: [['mensal', 'trimestral', 'anual']]
                }
            },
            turma_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: 'turmas', // Nome da tabela referenciada
                    key: 'id'
                }
            }
        },
        {
            tableName: "colaboradores",
            timestamps: true,
            updatedAt: "updated_at",
            createdAt: "created_at"
        }
    );

    // 🔗 Definição dos relacionamentos diretamente dentro da função auto-invocável
    AlunoModel.belongsTo(ResponsavelModel, {
        as: 'responsavel',
        foreignKey: 'responsavel_id'
    });

    AlunoModel.belongsTo(TurmaModel, {
        as: 'turma',
        foreignKey: 'turma_id'
    });

    return AlunoModel;

})();