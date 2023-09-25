import mysql2 from 'mysql2'
//foi mysql2, pois foi o npm i mysql2 que criamos no terminal 


//Armazenando os dados da conexão em uma constante // do http://localhost/phpmyadmin


//BANCO DE DADOS DBAFREE (Criamos)
 const conexao = mysql2.createConnection({
    host : 'db4free.net',
    user : 'senacaline',
    password : 'senac123',
     database : 'apiescolaaline'

 });




//Efetivando a conexão
// conexao.connect();
conexao.connect(erro => {
    if (erro){
        console.erro(`Erro ao conectar: ${erro.message}`)
    } else {
        console.log(`Banco de dados conectado em: ${conexao.config.host}`)
    }
});


// exportando a conexão (default é um só)
export default conexao;