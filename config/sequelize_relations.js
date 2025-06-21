import aluno from '../app/models/alunoModel.js';
import atividade from '../app/models/atividadeModel.js';
import pagamento from '../app/models/pagamentoModel.js';
import presenca from '../app/models/presencaModel.js';
import turma from '../app/models/turmaModel.js';
import responsavelAluno from '../app/models/responsavelAlunoModel.js';

export default () => {
    // Aluno - Turma (N-1)
    turma.hasMany(aluno, {
      foreignKey: 'id_turma',
      as: 'alunos'
    });
    aluno.belongsTo(turma, {
      foreignKey: 'id_turma',
      as: 'turma'
    });
  
    // Aluno - Atividade (1-N)
    aluno.hasMany(atividade, {
      foreignKey: 'id_aluno',
      as: 'atividades'
    });
    atividade.belongsTo(aluno, {
      foreignKey: 'id_aluno',
      as: 'aluno'
    });
  
    // Aluno - Responsável (1-1)
    responsavelAluno.hasMany(aluno, {
      foreignKey: 'responsavel_id',
      as: 'alunos'
    });
    aluno.belongsTo(responsavelAluno, {
      foreignKey: 'responsavel_id',
      as: 'responsavel'
    });
  
    // Aluno - Presença (1-N)
    aluno.hasMany(presenca, {
      foreignKey: 'id_aluno',
      as: 'presencas'
    });
    presenca.belongsTo(aluno, {
      foreignKey: 'id_aluno',
      as: 'aluno'
    });
  
    // Aluno - Pagamento (1-N)
    aluno.hasMany(pagamento, {
      foreignKey: 'id_aluno',
      as: 'pagamentos'
    });
    pagamento.belongsTo(aluno, {
      foreignKey: 'id_aluno',
      as: 'aluno'
    });
  }; 