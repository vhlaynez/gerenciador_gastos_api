var moment = require('moment');
var data = 'DD/MM/YYYY';

module.exports.index = function(application, req, res){

	var connection = application.config.dbConnection();
	var gastosModel = new application.app.models.GastosDAO(connection);

	gastosModel.get5UltimosGastos(function(error, result){
		res.render("home/index", {gastos : result, moment : moment, data:data});
	});

	
}