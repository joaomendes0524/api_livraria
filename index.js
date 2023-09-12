//importando o módulo express
const express = require("express");

//importação do arquivo de model da tabela de categoria
const categoria = require("./model/Categoria");

//instância executável do módulo express
const app = express();

//configuração para o express manipular.json
app.use(express.json());

//configuração para o express trabalhar com dados de formulário
app.use(express.urlencoded({extended:true }))

//teste de conexão 
//const connection = require("./database/database");
//console.log(connection);

//criação do servidor web de requisição/resposta
app.listen(3000, ()=>{
    console.group ('API LIVRARIA RODANDO EM http://localhost:3000');
});
