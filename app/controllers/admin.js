module.exports.formulario_inclusao_gasto = function(application, req, res){
	res.render("admin/form_add_gasto", {validacao:{}, gasto:{}});
}

module.exports.gastos_salvar = function(application, req, res){
	var gasto = req.body;

		req.assert('lugar','Lugar é obrigatório').notEmpty();
		req.assert('valor','Valor é obrigatório').notEmpty();
		req.assert('data_gasto','Data da compra é obrigatória').notEmpty();

		var erros = req.validationErrors();

		if(erros){
			res.render("admin/form_add_gasto", {validacao:erros, gasto : gasto});
			return;
		}

		var connection = application.config.dbConnection();
		var gastosModel = new application.models.GastosDAO(connection);

		gastosModel.salvarGasto(gasto, function(error, result){
			console.log(error);
			res.redirect('/gastos');
			connection.end();
			console.log('encerrou conexao ao db');
		});
}