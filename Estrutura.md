# Arquitetura de pastas
## Estrutura do projeto organizada em partes

# Pasta APP:
Guardará tanto o Controller , Middlewares e Models.

## CONTROLLERS:
Guarda várias subpastas e cada uma tem arquivos que são uma endpoint diferente
relacionada a sua respectiva api, exemplo consultarAluno guarda vários endpoints
para criar, atualizar , consultar e recuperar dados relacionados a entidade Aluno.

## Middlewares:
Aqui fica armazenado todos os arquivos intermediários como funções de endpoints ou validadores etc,
o validador de token, a função geradora de boletos e o  validador de arquivo são elementos 
desta pasta.

## Models:
Neste diretório fica armazenado todos os Models de tabelas do postgres em sequelize JS, 
nele tem todas as entidades em forma de objeto que pode ser manipulado via sequelize,
seus elementos são as entidades admin, aluno, atividade, aluno-atividade, pagamento, presenca,
professor, responsavel-aluno, turma e valorCurso.

# CONFIG:
Esta pasta contém arquivos JS responsável por estabelecer relações das entidades do banco,
declara constantes que são usadas em todo o projeto e define conexão com sequelize.

# DATABASE:
Nesta pasta possui duas subpastas sendo elas a MIGRATIONS e as SEEDS, elas criam as tabelas e 
populam com dados iniciais respectivamente.

# DOCKER:
Pasta importante que contém dockerfiles para criar três imagens sendo elas o NGINX, NODE e 
POSTGRES.

# INITNODE:
Guarda arquivos JS responsáveis por ler as pastas dentro de DATABASE chamadas MIGRATIONS e SEEDS
e executa-las, são duas funções uma para executar migrations e a outra seeds, elas são chamadas na
inicialização dentro de SERVER.JS.

# ROUTES:
Maior pasta do projeto, guarda arquivos JS e uma subpasta API,
detalhando o papel dos arquivos:

- WEB.JS:
Contém a rota inicial que envia arquivos estáticos ao usuário e retorna erro em caso de falha na
conexão com o servidor.

- ROUTES.JS:
Contém uma rota para efetuar Login e utiliza autenticação e verificação de dados,
caso seja o primeiro acesso ela possui uma rota secundária para registro de usuário e
se o login for válido o middleware gera um token válido por 20 MIN e dará acesso
a todas as APIS localizadas no arquivo API.JS a seguir.

- API.JS:
Contém rotas que direciona o usuário a 5 API´s utilizadas no projeto, sendo elas as:
alunoApi,   responsavelApi,     presencaApi,    mensalidadeApi e    atividadeApi
e cada api acima contém seus endpoints armazenados na pasta API no mesmo diretório.

## API:
Aqui é o "cérebro" da API, com o token válido o usuário poderá consultar, alterar, deletar qualquer
dado em cada um dos 5 arquivos que representa uma API. Cada arquivo manipula uma entidade no banco.


# STORAGE/DOCUMENTS:
Aqui fica todo o depósito de documentos e arquivos que serão recebidos das requisições.

# SWAGGER:
Nesta pasta tem arquivos YAML de todas as API´s mencionadas na pasta API e eles detalham cada endpoint
de cada API, por exemplo o login.YAML explica como envia os dados para poder ter acesso ao sistema.

# RESTANTE DOS ARQUIVOS:

## READSWAGGER.JS:
Função que realiza leitura em todos os arquivos YAML no diretório SWAGGER, essa
função será usada para criar a documentação das rotas.

## WAIT-FOR-IT.JS:
Função que obriga o conteiner do node esperar o conteiner do postgres ficar pronto
para só então realizar conexão, essa função garante que o node não tente realizar consultas 
ou conexão antes da hora, o que resultaria em erro e o servidor não rodará.