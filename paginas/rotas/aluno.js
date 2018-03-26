module.exports = function(app, req, res){
		app.get('/aluno', function(req, res){
  app.paginas.controller.aluno.aluno(req, res);
});
}