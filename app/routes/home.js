module.exports = function(application){
	var controller = require('../controller/home');
	
	application.get('/', function(req, res){
		console.log('estou na home route');
		application.app.controllers.home.index(application, req, res);
	});
}
