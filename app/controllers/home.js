var moment = require('moment');
var data = 'DD/MM/YYYY';

module.exports.index = function(application, req, res){

	var connection = application.config.dbConnection();
	var gastosModel = new application.models.GastosDAO(connection);

	gastosModel.get5UltimosGastos(function(error, result){
		console.log(error);
		res.render("home/index", {gastos : result, moment : moment, data:data});
		connection.end();
		console.log('encerrou conexao ao db');
	});

	
}