import AlunoModel from '../../models/alunoModel.js';
import CONSTANTS from '../../../config/constants.js';

export default async (req, res) => {
    try {
        const { id } = req.params;
        const aluno = await AlunoModel.findByPk(id);

        if (!aluno) {
            return res.status(CONSTANTS.HTTP.NOT_FOUND).json({ error: 'Aluno não encontrado.' });
        }

        await aluno.update(req.body);
        return res.status(CONSTANTS.HTTP.SUCCESS).json(aluno);
    } catch (error) {
        console.error('Erro ao atualizar aluno:', error);
        return res.status(CONSTANTS.HTTP.SERVER_ERROR).json({ error: 'Erro interno do servidor.' });
    }
};