module.exports = function(application){

	application.get('/gastos', function(req, res){
		application.controllers.gastos.gastos(application, req, res);
	});

	application.get('/gasto', function(req, res){
		application.controllers.gastos.gasto(application, req, res);
	});
}