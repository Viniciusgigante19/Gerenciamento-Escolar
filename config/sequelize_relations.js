import aluno from '../app/models/alunoModel.js';
import atividade from '../app/models/atividadeModel.js';
import alunoAtividade from '../app/models/alunoAtividadeModel.js';
import pagamento from '../app/models/pagamentoModel.js';
import presenca from '../app/models/presencaModel.js';
import responsavelAluno from '../app/models/responsavelAlunoModel.js';

export default () => {
  // Relação muitos-para-muitos entre Aluno e Atividade via tabela intermediária AlunosAtividades
  aluno.belongsToMany(atividade, {
    through: alunoAtividade,
    foreignKey: 'id_aluno',
    otherKey: 'id_atividade',
    as: 'atividades',
  });

  atividade.belongsToMany(aluno, {
    through: alunoAtividade,
    foreignKey: 'id_atividade',
    otherKey: 'id_aluno',
    as: 'alunos',
  });

  // Aluno - Responsável (1-N)
  responsavelAluno.hasMany(aluno, {
    foreignKey: 'responsavel_id',
    as: 'alunos',
  });
  aluno.belongsTo(responsavelAluno, {
    foreignKey: 'responsavel_id',
    as: 'responsavel',
  });

  // Aluno - Presença (1-N)
  aluno.hasMany(presenca, {
    foreignKey: 'id_aluno',
    as: 'presencas',
  });
  presenca.belongsTo(aluno, {
    foreignKey: 'id_aluno',
    as: 'aluno',
  });

  // Aluno - Pagamento (1-N)
  aluno.hasMany(pagamento, {
    foreignKey: 'id_aluno',
    as: 'pagamentos',
  });
  pagamento.belongsTo(aluno, {
    foreignKey: 'id_aluno',
    as: 'aluno',
  });
};
