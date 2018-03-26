var express = require('express');
var consign = require('consign');
var BodyParser = require('body-parser');
var expressValidator = require('express-validator');
var session = require('express-session');


var app = express();
app.set('view engine', 'ejs');
app.set('views', './paginas/views');

/*onde fica os estilos da paginas*/
app.use(express.static('./estilos'));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({exentended: true}));

/*validação de usuarios*/
app.use(expressValidator());

/*sessão*/

app.set('trust proxy', 1);
app.use(session({
	secret: "eserg-esrgs-egeh",
	/*pode ser true or false  bool true faz com q a sessão seja regravada no servidor cada refresh*/
	resave: false,/*false grava somente uma vez no refresh*/
	/*true or false true: cria uma sessão nova sempre aq a mesma for modificada false uma unica sessão*/
	saveUninitialized: false,
	name: "VICTOR",
	store : sessionStore,
	 cookie: { secure: true }
	}));

/*area de redirecionamento das rotas e baco de dados*/
consign()
.include('paginas/rotas')
.then('config/bd.js')
.then('paginas/models')
.then('paginas/controller')
.into(app);

module.exports = app;