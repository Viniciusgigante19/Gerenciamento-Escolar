import aluno from '../../models/alunoModel.js';

export default async function GetTodosAlunosController(req, res) {
    try {
        const { turmaId } = req.params;

        const alunos = await aluno.findAll({
            where: { id_turma: turmaId }  // Usa o campo correto do banco
        });

        if (alunos.length === 0) {
            return res.status(404).json({ mensagem: "Nenhum aluno encontrado para esta turma." });
        }

        res.json({
            mensagem: "Alunos encontrados com sucesso!",
            alunos: alunos
        });
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar alunos.", erro: error.message });
    }
}
