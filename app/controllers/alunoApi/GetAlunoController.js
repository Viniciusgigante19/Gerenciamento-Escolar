import aluno from '../../models/alunoModel.js';

export default async function GetAlunoController(req, res) {
    try {
        const { id } = req.params;
        if (id) {
            const alunoEncontrado = await aluno.findByPk(id);
            if (!alunoEncontrado) {
                return res.status(404).json({ mensagem: "Aluno não encontrado." });
            }
            return res.json({
                mensagem: "Aluno encontrado com sucesso!",
                aluno: alunoEncontrado
            });
        } else {
            const alunos = await aluno.findAll();
            return res.json(alunos);
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar aluno.", erro: error.message });
    }
}