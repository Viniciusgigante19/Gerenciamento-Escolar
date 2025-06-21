import Responsavel from '../../models/responsavelAlunoModel.js';

export default async function listResponsavelController(req, res) {
    try {
        const responsaveis = await Responsavel.findAll();
        res.json(responsaveis);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao listar responsáveis.", erro: error.message });
    }
}