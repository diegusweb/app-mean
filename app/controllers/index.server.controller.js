/*exports.render = function(req, res) {
 res.send("la cosa");
};*/

exports.render = function(req, res) {
	if(req.session.lastVisit){
		console.log(req.session.lastVisit);
	}

	req.session.lastVisit = new Date();

	res.render('index',{
	 	title: "Hola Diego"
	});
};



