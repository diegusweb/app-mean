/*exports.render = function(req, res) {
 res.send("la cosa");
};*/

exports.render = function(req, res) {
 res.render('index',{
 	title: "Hola Diego"
 });
};



