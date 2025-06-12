// Esse arquivo é o controller, ele faz o intermádio entre a api e o model

import AlunoModel from '../../models/alunoModel';
// 🔗 Importações dos models relacionados com aluno: Responsável e Turma
import ResponsavelModel from '../../models/responsavelModel';
import TurmaModel from '../../models/turmaModel';

// ⚙️ Importação das constantes de configuração do projeto (status HTTP, limites, etc)
import CONSTANTS from '../../utils/constants';

export default async (request, response) => {

    // 🎯 Constantes para códigos de status HTTP
    const HTTP_STATUS = CONSTANTS.HTTP;

    // 🔍 Parâmetros de paginação recebidos por query string
    const limit = parseInt(request.query.limit) || 100;
    const offset = parseInt(request.query.offset) || 0;

    // 🔃 Ordenação (padrão: por id crescente)
    const orderBy = request.query.orderBy || "id,asc";

    // 🧱 Verificação de limite máximo permitido (proteção contra abuso)
    if (limit > CONSTANTS.MAX_GET_LIMIT) {
        return response.status(HTTP_STATUS.BAD_REQUEST).json({ error: `Limit máximo: ${CONSTANTS.MAX_GET_LIMIT}.` });
    }

    try {
        // 📡 Consulta ao banco com Sequelize usando o model de Aluno
        const data = await AlunoModel.findAll({
            limit: limit + 1,               // Busca um a mais para saber se há "próxima página"
            offset: offset,
            order: [["id", "asc"]],         // 🚧 Aqui você pode futuramente aplicar orderBy dinamicamente

            // 🤝 Relacionamentos definidos: cada aluno pertence a um responsável e a uma turma
            include: [
                {
                    model: ResponsavelModel,
                    as: "responsavel"
                },
                {
                    model: TurmaModel,
                    as: "turma"
                }
            ]
        });

        // 🔁 Verifica se há mais registros além do limite atual
        const hasMore = data.length > limit;
        const rows = hasMore ? data.slice(0, limit) : data;
        const next = hasMore ? offset + limit : null;

        // 📦 Resposta ao cliente com dados e controle de paginação
        return response.status(HTTP_STATUS.SUCCESS).json({
            rows: rows,
            limit: limit,
            next: next
        });

    } catch (error) {
        // 🚨 Captura e log de falhas internas — erro no acesso ao banco ou estrutura
        console.log(error);
        return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Erro interno do servidor.' });
    }

};