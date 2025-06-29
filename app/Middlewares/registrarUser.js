import Admin from "../models/adminModel.js";
import bcrypt from 'bcrypt';

export default async (req, res) => {
  const { nome, email, password } = req.body;

  if (!nome || !email || !password) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  try {
    const existingUser = await Admin.findOne({ where: { email } });

    if (existingUser) {
      return res.status(400).json({ message: 'Usuário já existe.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await Admin.create({
      nome,
      email,
      senha: hashedPassword
    });

    return res.status(201).json({ message: 'Usuário registrado com sucesso.', user: newUser });
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    return res.status(500).json({ message: 'Erro interno do servidor.' });
  }
};
