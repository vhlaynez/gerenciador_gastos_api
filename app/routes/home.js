module.exports = function(application){
	application.get('/', function(req, res){
		application.controllers.home.index(application, req, res);
	});
}