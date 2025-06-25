export const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    'application/pdf',
    'text/plain',
    'image/jpeg',
    'image/png'
  ];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true); // aceita o arquivo
  } else {
    cb(new Error('Tipo de arquivo não permitido'), false); // rejeita o arquivo
  }
};
