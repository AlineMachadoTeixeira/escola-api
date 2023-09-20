import mysql2 from 'mysql2'
//foi mysql2, pois foi o npm i mysql2 que criamos no terminal 


//Armazenando os dados da conexão em uma constante
const conexao = mysql2.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'escola'

});

//Efetivando a conexão
// conexao.connect();
conexao.connect(erro => {
    if (erro){
        console.erro(`Erro ao conectar: ${erro.message}`)
    } else {
        console.log(`Banco de dados conectado com sucesso`)
    }
});


// exportando a conexão (default é um só)
export default conexao;