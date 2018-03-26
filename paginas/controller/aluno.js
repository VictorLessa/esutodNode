module.exports.aluno = function(req, res){
	console.log(req.session);
	res.render('portal/aluno');

}