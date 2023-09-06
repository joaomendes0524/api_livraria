//importação do módulo do sequelize
const sequelize = require("sequelize");

//cria a conexão com o banco de dados por meio do sequelize
/*
PARÂMETROS:
1° - nome do banco de dados;
2° - usuário do banco de dados;
3° - a senha do banco de dados;
4° - objeto JSON com dados de configuração.
            1- host do banco de dados
            2- a porta lógica do banco de dados
            3- dialeto sql a ser utilizado
            4- timezone  
*/
const connection = new sequelize(
    "bd_api_livraria",
    "root",
    "",
    {
        host:"localhost",
        port:3306,
        dialect: "mysql",
        timezone:"-03:00"
    }
)

module.exports = connection;