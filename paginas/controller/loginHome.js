module.exports.login = function (app, req, res){
		res.render('home/login', {validacao: {}, formulario:{}});	
}
module.exports.valida = function(app, req, res){
	var dadosFrom = req.body;

	req.assert('registro_aluno', 'Registro do Usuario esta errado').isInt();
	req.assert('senha', 'Senha nao pode ser nulo').isInt();

	var erros = req.validationErrors();
	
	if(erros){
		res.render('home/login', {validacao: erros, formulario: dadosFrom});
		return;
	}

		var connection = app.config.bd();
		var ModelsLogin = new app.paginas.models.modelsLogin(connection);
		
		ModelsLogin.login(dadosFrom, req, function(error, resultado){
			if(resultado != ''){
				req.session.autorizado = true;
			}
			if(req.session.autorizado){
				console.log(req.session);
				res.redirect('/aluno');
			}else{
				res.render('home/login', {validacao:{}, formulario: [{"registro_aluno": " "}]});
				return;
			}

			//res.render('portal/portal', {dadosUsuario: resultado});
		});
}