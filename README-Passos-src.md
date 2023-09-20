- Abriu um novo terminal e escreveu npm i mysql2 
 (PS C:\Users\aline.mteixeira2\Desktop\escola-api> npm i mysql2)

- Criou pasta src na raiz do visual code 

- Criou arquivo banco.js

- Criou arquivo aluno.js

- Importamos import { ler } from './src/aluno.js' para o arquivo index.js
depois preenchemos no ***index.js * isso

-  CRUD //Ler/Exibir todos os alunos 

//adicionando suporte 
app.use(express.json())

//adicionando suporte e dados vindos de formulários
app.use(express.urlencoded ({ extended : true}))

- Depois criamos o CRUD //INSERIR alunos no banco de dados
no index import { ler, inserir } from './src/aluno.js' Junto com o ler e depois na parte //Inserindo NOVO aluno com POST faz as modificação 

