module.exports = function(application){
		
	application.get('/', function(req, res){
		console.log('estou na home route');
		application.app.controllers.home.index(application, req, res);
	});
}
