import express from 'express';

//armazenando o express em uma variável. Ao inves de chamar express().get, usaremos app.get;
const app = express();

//Criando AS ROTAS 

//Raiz da aplicação
app.get('/', (req, res) => {
    res.send (`Raiz da API NodeJS + Express + MySQL`);
});

//Todos os alunos 
app.get('/alunos', (req, res) => {
    res.send (`Exibindo dados de todos os alunos`)
});

//Um aluno 
app.get('/alunos/:id', (req, res) => {
    res.send (`Exibindo dados de UM aluno`)
});

//Inserindo NOVO aluno com POST 
app.post('/alunos', (req, res) => {
    res.send (`Inserindo UM aluno`)
});

//Atualizando Dados de um aluno  com patch
app.patch('/alunos/:id', (req, res) => {
    res.send (`Atualizando dados de Um aluno `)
});


//Excluindo Aluno com delete
app.delete('/alunos/:id', (req, res) => {
    res.send (`Excluindo alunos `)
});

//Executando o servidor 
const porta = 8080;
// porta é a const 8080 está lá em cima  http://localhost:8080/
//Precisa ligar o servidor no CMD coloque npx nodemon
app.listen(porta, () => {
    console.log(`Servidor NodeJS rodando na porta ${porta}`);
});



