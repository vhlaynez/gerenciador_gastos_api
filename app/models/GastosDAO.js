function GastosDAO(connection){
	this._connection = connection;
}
	
GastosDAO.prototype.getGastos = function(callback){
	this._connection.query('select * from gastos order by data_criacao desc', callback);
}
GastosDAO.prototype.getGasto = function(id_gasto, callback){
	//console.log(id_gasto.id_gasto);
	this._connection.query('select * from gastos where id_gasto = ' + id_gasto.id_gasto, callback);
}

GastosDAO.prototype.salvarGasto = function(gasto, callback){
	this._connection.query('insert into gastos set ?', gasto, callback);
}

GastosDAO.prototype.get5UltimosGastos = function(callback){
	this._connection.query('select * from gastos order by data_criacao desc limit 3', callback);
}

module.exports = function(){

	return GastosDAO;
}