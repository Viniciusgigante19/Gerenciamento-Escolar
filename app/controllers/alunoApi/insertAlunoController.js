import AlunoModel from '../../models/alunoModel.js';
import CONSTANTS from '../../../config/constants.js';

export default async function insertAlunoController(req, res) {
    try {
        const novoAluno = await AlunoModel.create(req.body);
        return res.status(CONSTANTS.HTTP.SUCCESS_CREATED).json({
            mensagem: "Aluno cadastrado com sucesso!",
            aluno: novoAluno
        });
    } catch (error) {
        console.error('Erro ao inserir aluno:', error);
        return res.status(CONSTANTS.HTTP.SERVER_ERROR).json({ mensagem: 'Erro interno do servidor.' });
    }
}