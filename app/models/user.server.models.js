'use strict';

var mongoose = require('mongoose'),
	Shema = mongoose.Schema;

//definimos nuestro user schema
var UserSchema = new Schema({
	firstName:String,
	lastName:String,
	email:String,
	username:String,
	password:String
});	

//creamos nuestro modelo user
mongoose.model('User', UserSchema);