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
Fazer todos os passos a passos da pagina aluno.js e incluir no index.js terminou faz o debaixo




### Depois que terminar a página aluno.js de colocar todas as function  inserir ler lerUm atualizar excluir.

Crie uma conta no site  https://www.db4free.net/index.php?language=pt


- Confirmar o email. Vai aparecer os dados que você colocou
- HOST:db4free.net
- Email: doyinod625@fandsend.com
- Nome do banco de dados MySQL: apiescolaaline
- Nome de usuário: senacaline
- Senha do MySQL:  senac123

Entrar no PHP ADM https://www.db4free.net/signup.php

##### Usar o render 
https://dashboard.render.com/ ou  https://dashboard.render.com/

nome: escolaaline
Build Command: npm install
Start Command: npm start

no packge.json escreve   "start": "node index.js",
"scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"    
  },