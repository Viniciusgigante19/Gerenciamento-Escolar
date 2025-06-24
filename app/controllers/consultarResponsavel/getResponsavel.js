import Responsavel from '../../models/responsavelAlunoModel.js';

export default async function getResponsavel(req, res) {
    const { id } = req.params;

    try {
        const responsavel = await Responsavel.findByPk(id);

        if (!responsavel) {
            return res.status(404).json({ message: 'Responsável não encontrado.' });
        }

        return res.status(200).json(responsavel);

    } catch (error) {
        return res.status(500).json({ message: "Erro ao buscar responsável.", erro: error.message });
    }
}
