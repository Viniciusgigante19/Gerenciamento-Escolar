import Responsavel from '../../models/responsavelAlunoModel.js';

export default async function insertResponsavelController(req, res) {
    try {
        const novoResponsavel = await Responsavel.create(req.body);
        res.status(201).json({
            mensagem: "Responsável cadastrado com sucesso!",
            responsavel: novoResponsavel
        });
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao cadastrar responsável.", erro: error.message });
    }
}