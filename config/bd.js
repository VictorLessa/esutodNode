var mysql = require('mysql');

var banco = function(){
	console.log('ativou banco de dados');
	return mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'alunos'
    });
}

module.exports = function(){
	
	return banco;
}