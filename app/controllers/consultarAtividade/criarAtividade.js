import atividade from '../../models/atividadeModel.js';
import alunoAtividade from '../../models/alunoAtividadeModel.js';
import Aluno from '../../models/alunoModel.js';

export default async function criarAtividade(req, res) {
  try {
    const { descricao, data_atividade, ano_turma, classe } = req.body;

    if (!descricao || !data_atividade || !ano_turma || !classe) {
      return res.status(400).json({ error: 'Campos obrigatórios ausentes' });
    }

    // Busca alunos da turma (ano + classe)
    const alunos = await Aluno.findAll({
      where: { ano_turma, classe }
    });

    if (alunos.length === 0) {
      return res.status(404).json({ error: 'Nenhum aluno encontrado para esse ano e classe' });
    }

    // Cria a atividade
    const novaAtividade = await atividade.create({
      descricao,
      data_atividade,
      ano_turma,
      classe,
      arquivo_anexo: req.file ? req.file.path : null,
      responsavel: req.user?.name || 'Professor'
    });

    // Cria as associações na tabela intermediária alunos_atividades
    const relacoes = alunos.map(aluno => ({
      id_aluno: aluno.id,
      id_atividade: novaAtividade.id,
      status_participacao: 'Em andamento'
    }));
    await alunoAtividade.bulkCreate(relacoes);

    // Responde com sucesso
    return res.status(201).json({
      message: 'Atividade criada e associada aos alunos da turma',
      atividade: novaAtividade
    });

  } catch (error) {
    console.error('Erro ao criar atividade:', error);
    return res.status(500).json({ error: 'Erro interno no servidor' });
  }
}
