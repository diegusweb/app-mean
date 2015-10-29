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

exports.update = function(req, res, next){
	User.findByIdAndUpdate(rep.user.id, req.body, function(err, user){
		if(err){
			return next(err);
		}else{
			res.json(users);
		}
	});
};

exports.list = function(req, res, next){
	User.find({},function(err, users){
		if(err){
			return next(err);
		}else{
			res.json(users);
		}
	});
};

exports.read = function(req, res){
	res.json(req.user);
};

exports.delete = function(req, res, next){
	req.user.remove(function(err){
		if(err){
			return next(err);
		}else{
			res.json(req.user);
		}
	});
};

exports.userByID = function(req, res, next, id){
	User.findOne({
		_id: id
	}, function(err, user){
		if(err){
			//lama al sihuiente middleware
			return next(err);
		}else{
			//configura la propiedad 'req.user'
			req.user = user;

			next();
		}
	});
};


/*exports.listFind = function(req, res, next){
	User.find({}, function(err, users){
		if(err){
			return next(err);
		}else{
			res.json(users);
		}
	});
};*/