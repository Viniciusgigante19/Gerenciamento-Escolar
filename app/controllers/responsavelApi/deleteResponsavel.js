import Responsavel from '../../models/responsavelAlunoModel.js';

export default async function deleteResponsavelController(req, res) {
    try {
        const { id } = req.params;
        const deleted = await Responsavel.destroy({ where: { id } });
        if (!deleted) {
            return res.status(404).json({ mensagem: "Responsável não encontrado para deletar." });
        }
        res.json({ mensagem: "Responsável deletado com sucesso!" });
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao deletar responsável.", erro: error.message });
    }
}