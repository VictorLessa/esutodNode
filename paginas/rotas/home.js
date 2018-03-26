module.exports = function(app){
	app.get('/', function(req, res){
		app.paginas.controller.loginHome.login(app, req, res);
	});
	app.post('/valida', function(req, res){
		app.paginas.controller.loginHome.valida(app, req, res);
	});
}