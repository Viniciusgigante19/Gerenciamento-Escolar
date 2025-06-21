import AlunoModel from '../../models/alunoModel.js';
import ResponsavelModel from '../../models/responsavelAlunoModel.js';
import CONSTANTS from '../../../config/constants.js';

export default async function insertAlunoController(req, res) {
    try {
        const { responsavel_id, rg } = req.body;

        // Verifica se já existe aluno com o mesmo RG
        if (rg) {
            const alunoExistente = await AlunoModel.findOne({ where: { rg } });
            if (alunoExistente) {
                return res.status(400).json({ mensagem: `Aluno com rg: ${rg} já existe.` });
            }
        }

        // Se foi informado um responsavel_id, verifica se existe
        if (responsavel_id) {
            const responsavel = await ResponsavelModel.findByPk(responsavel_id);
            if (!responsavel) {
                return res.status(404).json({ mensagem: `Responsável com ID: ${responsavel_id} não encontrado.` });
            }
        }

        const novoAluno = await AlunoModel.create(req.body);
        return res.status(CONSTANTS.HTTP.SUCCESS_CREATED).json({
            mensagem: "Aluno cadastrado com sucesso!",
            aluno: novoAluno
        });
    } catch (error) {
        console.error('Erro ao inserir aluno:', error);
        return res.status(CONSTANTS.HTTP.SERVER_ERROR).json({ 
            mensagem: 'Erro interno do servidor.',
            erro: error.message,
            detalhes: error.errors
        });
    }
}