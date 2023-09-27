import express from 'express';
import { ler, inserir, lerUm, atualizar, excluir } from './src/aluno.js'

//armazenando o express em uma variável. Ao inves de chamar express().get, usaremos app.get;
const app = express();
//const porta = 8080; era essa quando estavamos usando o xampp
const porta = process.env.PORT || 3306; // porta banco de dados do:  db4free.net  Permitindo que o servidor aponte a melhor porta, usamos a porta 3306

//adicionando suporte 
app.use(express.json())

//adicionando suporte e dados vindos de formulários
app.use(express.urlencoded ({ extended : true}))


//Criando AS ROTAS 

//Raiz da aplicação
app.get('/', (req, res) => {
    res.send (`Raiz da API NodeJS + Express + MySQL`);
});

//Exibindo Todos os alunos 
app.get('/alunos', (req, res) => {
    // res.send (`Dados de todos os alunos`)
    ler(res);  //agora vai puxar do banco de dados as informações
});

//Exibindo Dados de Um aluno 
app.get('/alunos/:id', (req, res) => {
    // res.send (`Exibindo dados de UM aluno`)
    const id = parseInt(req.params.id);
    lerUm(id, res);
});

//Inserindo NOVO aluno com POST 
app.post('/alunos', (req, res) => {
    // res.send (`Inserindo UM aluno`)
    const novoAluno = req.body;
    inserir(novoAluno, res); //puxa do banco de dados 


});

//Atualizando Dados de um aluno  com patch
app.patch('/alunos/:id', (req, res) => {
    // res.send (`Atualizando dados de Um aluno `)
    const id = parseInt(req.params.id);
    const aluno = req.body;
    atualizar(id, aluno, res);
});


//Excluindo Aluno com delete
app.delete('/alunos/:id', (req, res) => {
    // res.send (`Excluindo alunos `)
    const id = parseInt(req.params.id);
    excluir(id, res);
});

//Executando o servidor 

// porta é a const 8080 está lá em cima linha 6 http://localhost:8080/
//Precisa ligar o servidor no CMD coloque npx nodemon
app.listen(porta, () => {
    console.log(`Servidor NodeJS rodando na porta ${porta}`);
});



