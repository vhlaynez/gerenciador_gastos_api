module.exports = function(application){
	application.get('/gastos', function(req, res){
		//Alterado conforme padrão Heroku
		application.controllers.gastos.gastos(application, req, res);
	});

	application.get('/gasto', function(req, res){
		//Alterado conforme padrão Heroku
		application.controllers.gastos.gasto(application, req, res);
	});
}