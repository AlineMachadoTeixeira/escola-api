import conexao from './banco.js';
//Importando da pasta banco.js


// CRUD

//Ler/Exibir todos os alunos 
function ler(res){
    const sql = "SELECT * FROM  alunos ORDER BY nome";

    conexao.query(sql, (erro, resultados) => {
        //Verificação para ver se há conteúdo
        if(resultados.length === 0){
            res.status(204).end(); // É importante trabalhar com os status http. 204 = sem conteúdo.  .end() encerra a execução
            return;
        }

        if(erro) {
            res.status(400).json(erro.code); // 400 erro = BAD Request
        } else{
            res.status(200).json(resultados)

        }
    });
}

//INSERIR alunos no banco de dados
function inserir(aluno, res){
    const sql = "INSERT INTO alunos SET ?"; //  SET ? é a Forma mais facil de fazer isso INSERT * FROM  alunos ORDER BY nome
    
    conexao.query(sql, aluno, (erro) => {
        if(erro){
            res.status(400).json(erro.code);
        } else{
            res.status(201).json({ "Status" : "Aluno inserido"});
            // res.status(201).end(); assim não vem com o texto
        }
    })
}


//Ler Um Aluno no banco de dados
//Usa o id no lerUm(id, res), poís só queremos um aluno.
function lerUm(id, res){
    const sql = "SELECT * FROM alunos WHERE id = ?";
    conexao.query(sql, id, (erro, resultados) =>{
        if(resultados === 0){
            res.status(204).end();
            return;
        }

        if(erro){
            res.status(400).json(erro.code);            
        } else {
            res.status(200).json(resultados);
        }
    });
}


export { ler,  inserir, lerUm};