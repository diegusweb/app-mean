'use strict';

//carga el controller 'users'
var users = require('../../app/controllers/users.server.controller');

//define el metodo routes modul
module.exports = function(app){
	app.route('/users')
	.post(users.create)
	.get(users.list);

	app.route('/users/:userId')
	.get(users.read);

	app.param('userId', users.userByID);
};