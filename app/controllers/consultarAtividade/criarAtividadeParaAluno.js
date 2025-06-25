import atividade from '../../models/atividadeModel.js';
import alunoAtividade from '../../models/alunoAtividadeModel.js';

export default async function criarAtividade(req, res) {
  try {
    const { descricao, data_atividade, alunosIds } = req.body;

    if (!descricao || !data_atividade || !alunosIds) {
      return res.status(400).json({ error: 'Campos obrigatórios ausentes' });
    }

    let alunosArray = [];

    // Verifica se os IDs vieram como string JSON ou array real
    if (typeof alunosIds === 'string') {
      try {
        alunosArray = JSON.parse(alunosIds);
      } catch {
        return res.status(400).json({ error: 'Formato inválido para alunosIds' });
      }
    } else if (Array.isArray(alunosIds)) {
      alunosArray = alunosIds;
    } else {
      return res.status(400).json({ error: 'alunosIds deve ser uma lista ou string JSON' });
    }

    if (alunosArray.length === 0) {
      return res.status(400).json({ error: 'Nenhum ID de aluno fornecido' });
    }

    // Cria a nova atividade
    const novaAtividade = await atividade.create({
      descricao,
      data_atividade,
      arquivo_anexo: req.file ? req.file.path : null,
      responsavel: req.user?.name || 'Professor'
    });

    // Relaciona cada aluno à nova atividade
    const relacoes = alunosArray.map(id_aluno => ({
      id_aluno,
      id_atividade: novaAtividade.id,
      status_participacao: 'Em andamento'
    }));

    await alunoAtividade.bulkCreate(relacoes);

    return res.status(201).json({
      message: 'Atividade criada com sucesso e atribuída aos alunos selecionados',
      atividade: novaAtividade
    });

  } catch (error) {
    console.error('Erro ao criar atividade:', error);
    return res.status(500).json({ error: 'Erro interno no servidor' });
  }
}
