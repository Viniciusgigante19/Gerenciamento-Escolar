import Responsavel from '../../models/responsavelAlunoModel.js';

export default async function getResponsaveis(req, res) {
    try {
        const responsaveis = await Responsavel.findAll({
            order: [['nome', 'ASC']] // Ordena pelo campo nome em ordem crescente (A-Z)
        });
        
        if (responsaveis.length === 0) {
            return res.status(404).json({ message: 'Nenhum responsável encontrado.' });
        }

        return res.status(200).json(responsaveis);
    } catch (error) {
        console.error('Erro ao buscar responsáveis:', error);
        return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
}
