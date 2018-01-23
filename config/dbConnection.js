var mysql = require('mysql');
	
var connMySQL = function(){
	console.log('conexão com o bd foi realizada');
	return mysql.createConnection(JAWSDB_URL);
	/*return mysql.createConnection({
		host:'mwgmw3rs78pvwk4e.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user:'uhyogic5144ah01v',
		password:'znk732ge6m11vy61',
		database:'jjs0ervflrpdv07n'
	});*/
}

module.exports = function(){
	return connMySQL;
}