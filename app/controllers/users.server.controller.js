'use strict';

var User = require("mongoose").model("User");

// crea un nuevo metodo controller
exports.create = function(req, res, next){
	//crea una instancia nueva del modelo user
	var user = new User(req.body);
	//Metodo save, para guardar un nuevo user
	user.save(function(err){
		if(err){
			//llama al metodo siguiente mensaje error
			return nexr(err);
		}
		else{
			
			res.jason(user);
		}
	});
};