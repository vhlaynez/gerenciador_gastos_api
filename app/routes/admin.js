module.exports = function(application){
	application.get('/formulario_inclusao_gasto', function(req, res){
		//Alterado conforme padrão Heroku
		application.controllers.admin.formulario_inclusao_gasto(application, req, res);
	});

	application.post('/gastos/salvar', function(req, res){
		//Alterado conforme padrão Heroku
		application.controllers.admin.gastos_salvar(application, req, res);
	});

	application.post('/gastos/apagar', function(req, res){
		//Alterado conforme padrão Heroku
		application.controllers.admin.gastos_salvar(application, req, res);
	});
}