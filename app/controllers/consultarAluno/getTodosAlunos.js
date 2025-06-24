import aluno from '../../models/alunoModel.js';

export default async function GetTodosAlunos(req, res) {
  try {
    const listaAlunos = await aluno.findAll({
      order: [['nome', 'ASC']], // ordena alfabeticamente
      attributes: [
        'id',
        'nome',
        'ano_turma',
        'classe',
        'data_matricula',
        'status'
        // adicione aqui outros campos se quiser
      ]
    });

    res.json({
      mensagem: "Lista de alunos carregada com sucesso!",
      alunos: listaAlunos
    });

  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao buscar alunos.", erro: error.message });
  }
}
