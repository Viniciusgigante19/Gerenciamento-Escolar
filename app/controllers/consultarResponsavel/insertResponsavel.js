import Responsavel from '../../models/responsavelAlunoModel.js';

export default async function insertResponsavel(req, res) {
    const { nome, telefone } = req.body;

    try {
        const novoResponsavel = await Responsavel.create({ nome, telefone });
        res.status(201).json({
            mensagem: "Responsável cadastrado com sucesso!",
            responsavel: novoResponsavel
        });
    } catch (error) {
  console.error(error);
  res.status(500).json({
    mensagem: "Erro ao cadastrar responsável.",
    erro: error.message,
    detalhes: error.errors // array de erros de validação, se houver
  });
}
}
