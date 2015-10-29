var config = require('./config'),
	session = require('express-session'),
	express = require('express'),
	morgan = require('morgan'),
	compress = require('compression'),
	bodyParser = require('body-parser'),
	passport = require('passport'),
	methodOverride = require('method-override');


module.exports = function(){
	var app = express();

	if(process.env.NODE_ENV === 'development'){
		app.use(morgan('dev'));
	}else if(process.env.NODE_ENV === 'production'){
		app.use(compress());
	}

	app.use(bodyParser.urlencoded({ extended: true }));

	app.use(bodyParser.json());
	app.use(methodOverride());
	//para sesiones
	app.use(session({
		saveUninitialized: true,
		resave:true,
		secret:config.sessionSecret
	}));
	//para nuestro sistema de plantillas
	app.set('views','./app/views');  //configura direc views
	app.set('view engine','ejs');
	//---
	//autentificación  
	app.use(passport.initialize());
	app.use(passport.session());
	//--
	require('../app/routes/index.server.routes.js')(app);	
	require('../app/routes/users.server.routes.js')(app);	
	//para archivos estaticos
	app.use(express.static('./public'));
	//--
	return app;
};