import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token não fornecido' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    return next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token expirado' });
    } else if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Token inválido' });
    } else {
      return res.status(500).json({ message: 'Erro ao verificar o token' });
    }
  }
}
