module.exports = function(application){
	application.get('/', function(req, res){
		//Alterado conforme padrão Heroku
		application.controllers.home.index(application, req, res);
	});
}