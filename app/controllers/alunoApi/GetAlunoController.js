/*export default function GetAlunoController(req, res) {
    // Exemplo de resposta fixa
    res.json({ mensagem: "GetAlunoController funcionando!" });
}*/
import aluno from '../../models/alunoModel.js';

export default async function GetAlunoController(req, res) {
    try {
        const { id } = req.params;
        const alunoEncontrado = await aluno.findByPk(id);

        if (!alunoEncontrado) {
            return res.status(404).json({ mensagem: "Aluno não encontrado." });
        }

        res.json({
            mensagem: "Aluno encontrado com sucesso!",
            aluno: alunoEncontrado
        });
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar aluno.", erro: error.message });
    }
}