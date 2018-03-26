function Login(connection){
	this._connection = connection;
}
Login.prototype.login = function(dadosFrom, req, callback){
	this._connection.query("select * from usuarios where registro_aluno = '" + dadosFrom.registro_aluno + "'and senha = '" + dadosFrom.senha + "'", callback);
}
module.exports = function(){
	return Login;
}