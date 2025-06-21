import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import AdminModel from '../models/adminModel.js';

export default async (req, res) => 
{
    const { email, senha } = req.body;
    
    try{

        // Este aqui busca o usuario pelo seu email
        const adminModel = await AdminModel.findOne({
            where: {
                email: email
            }
        });

        if(!adminModel){
            return res.status(404).json({ message: 'Credenciais inválidas!' });
        }

        const senhaCorreta = await bcrypt.compare(senha, adminModel.senha);
        if(!senhaCorreta){
            return res.status(404).json({ message: 'Credenciais inválidas!' });
        }

        const payload = {
            id: adminModel.id,
            email: adminModel.email
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '20Min' // Define o tempo de expiração do token
        });

        return res.status(200).json({
            token: token,
            expires_in: '20Min'
        })
    }catch(error){
        console.error('Erro ao efetuar login:', error);
        return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
}
