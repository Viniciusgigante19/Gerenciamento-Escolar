import Responsavel from '../../models/responsavelAlunoModel.js';

export default async function updateResponsavelController(req, res) {
    try {
        const { id } = req.params;
        const [updated] = await Responsavel.update(req.body, { where: { id } });
        if (!updated) {
            return res.status(404).json({ mensagem: "Responsável não encontrado para atualizar." });
        }
        const responsavelAtualizado = await Responsavel.findByPk(id);
        res.json({
            mensagem: "Responsável atualizado com sucesso!",
            responsavel: responsavelAtualizado
        });
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao atualizar responsável.", erro: error.message });
    }
}