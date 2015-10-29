var config = require('./config'),
	mongoose = require('mongoose');

module.exports = function(){
	var db = mongoose.connect(config.db);

	//carga del modelo "user"
	require('../app/models/user.server.models');

	//devolver la isntancia de conexion a Mogoose
	return db;
};	