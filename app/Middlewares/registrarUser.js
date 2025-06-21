import adminModel from "../models/adminModel.js";
import sequelize from '../../config/sequelize.js';

export default async (req, res) => 
{
    const { nome ,email, password } = req.body;
    if (!nome || !email || !password) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }

    try {
        const Admin = adminModel(sequelize);
        const existingUser = await Admin.findOne({ where: { email } });

        if (existingUser) {
            return res.status(400).json({ message: 'Usuário já existe.' });
        }

        const newUser = await Admin.create({
            nome,
            email,
            senha: password // Certifique-se de hashear a senha antes de armazená-la
        });

        return res.status(201).json({ message: 'Usuário registrado com sucesso.', user: newUser });
    } catch (error) {
        console.error('Erro ao registrar usuário:', error);
        return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
}