import ResponsavelModel from '../../models/responsavelAlunoModel.js';

export default async function getResponsavelController(req, res) {
    try {
        const { id } = req.params;
        if (id) {
            const responsavel = await ResponsavelModel.findByPk(id);
            if (!responsavel) {
                return res.status(404).json({ mensagem: "Responsável não encontrado." });
            }
            return res.json(responsavel);
        } else {
            const responsaveis = await ResponsavelModel.findAll();
            return res.json(responsaveis);
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar responsável.", erro: error.message });
    }
}