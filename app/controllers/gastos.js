var moment = require('moment');
var data = 'DD/MM/YYYY';
var data2 = 'DD/MM/YYYY [às] HH:mm';


module.exports.gastos = function(application, req, res){
	var connection = application.config.dbConnection();
	var gastosModel = new application.models.GastosDAO(connection);

	gastosModel.getGastos(function(error, result){
		console.log(error);
		res.render("gastos/gastos", {gastos : result, moment : moment, data:data} );
		connection.end();
		console.log('encerrou conexao ao db');
	});
}

module.exports.gasto = function(application, req, res){
	var connection = application.config.dbConnection();
	var gastosModel = new application.models.GastosDAO(connection);

	var id_gasto= req.query;

	gastosModel.getGasto(id_gasto, function(error, result){
		console.log(error);
		res.render("gastos/gasto", {gasto : result, moment : moment, data2:data2, data:data} );
		connection.end();
		console.log('encerrou conexao ao db');
	});	
}