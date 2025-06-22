import Responsavel from '../../models/responsavelAlunoModel.js';

export default async function updateResponsavel(req, res) {
    const { id } = req.params;
    const { nome, telefone } = req.body;

    try {
        const responsavel = await Responsavel.findByPk(id);

        if (!responsavel) {
            return res.status(404).json({ mensagem: 'Responsável não encontrado.' });
        }

        // Atualiza apenas os campos que foram enviados
        if (nome !== undefined) responsavel.nome = nome;
        if (telefone !== undefined) responsavel.telefone = telefone;

        await responsavel.save();

        return res.status(200).json({
            mensagem: 'Responsável atualizado com sucesso.',
            responsavel
        });

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro ao atualizar responsável.', erro: error.message });
    }
}
