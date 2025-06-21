import AlunoModel from '../../models/alunoModel.js';
// ⚙️ Importação das constantes de configuração do projeto (status HTTP, limites, etc)
import CONSTANTS from '../../../config/constants.js';

export default async (req, res) => {

    try{
    const {id} = req.params;

    const aluno = await AlunoModel.findByPk(id);

    if (!aluno) {
        return res.status(401).json({mensage: 'Aluno não encontrado.'})
    }

    await aluno.destroy();

    return res.status(200).json({mensage: 'Aluno deletado com succeso'});
    }catch(erro){
        console.error('Erro ao deletar aluno', erro);
        return res.status(500).json({mensage: 'Erro interno do servidor'})        
    }

};
