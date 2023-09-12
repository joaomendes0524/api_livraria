//importação do módulo sequelize
const sequelize = require("sequelize");

//importação da conexão com o banco de dados

const connection = require("../database/database");

/*
Mapeamento da tabela de categoria 
Parâmetros do método define:
1° - Nome da tabela
2° - Campos da tabela e suas regras (tipo, null, primary key etc...), deve ser um JSON.
*/
const Categoria = connection.define(
    'tbl_categoria', 
    {
        codigo_categoria:{
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true },

    nome_categoria:{
        type: sequelize.STRING(250),
        allowNull: false }
    }
);
//Sincronização com o banco de dados
Categoria.sync({force:false});
module.exports = Categoria;