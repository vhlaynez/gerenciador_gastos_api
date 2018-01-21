module.exports = function(application){

	application.get('/gastos', function(req, res){
		application.app.controllers.gastos.gastos(application, req, res);
	});

	application.get('/gasto', function(req, res){
		application.app.controllers.gastos.gasto(application, req, res);
	});
}