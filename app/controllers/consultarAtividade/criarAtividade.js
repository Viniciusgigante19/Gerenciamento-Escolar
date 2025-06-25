import atividade from '../../models/atividadeModel.js';
import alunoAtividade from '../../models/alunoAtividadeModel.js';

export default async function criarAtividade(req, res) {
  try {
    const { descricao, data_atividade, id_turma, alunosIds } = req.body;

    if (!descricao || !data_atividade) {
      return res.status(400).json({ error: 'Campos obrigatórios ausentes' });
    }

    let alunosArray = [];
    if (typeof alunosIds === 'string') {
      try {
        alunosArray = JSON.parse(alunosIds);
      } catch {
        return res.status(400).json({ error: 'Formato inválido para alunosIds' });
      }
    } else if (Array.isArray(alunosIds)) {
      alunosArray = alunosIds;
    }

    const novaAtividade = await atividade.create({
      descricao,
      data_atividade,
      ...(id_turma ? { id_turma } : {}),  // só adiciona id_turma se existir
      arquivo_anexo: req.file ? req.file.path : null,
      responsavel: req.user?.name || 'Professor'
    });

    if (alunosArray.length > 0) {
      const relacoes = alunosArray.map(id_aluno => ({
        id_aluno,
        id_atividade: novaAtividade.id,
        status_participacao: 'Em andamento'
      }));

      await alunoAtividade.bulkCreate(relacoes);
    }

    return res.status(201).json({
      message: 'Atividade criada com sucesso',
      atividade: novaAtividade
    });

  } catch (error) {
    console.error('Erro ao criar atividade:', error);
    return res.status(500).json({ error: 'Erro interno no servidor' });
  }
}
