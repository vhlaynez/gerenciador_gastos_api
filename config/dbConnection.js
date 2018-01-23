var mysql = require('mysql');
	
var connMySQL = function(){
	console.log('conexão com o bd foi realizada');
	return mysql.createConnection({
		host:'',
		user:'',
		password:'',
		database:''
	});
}

module.exports = function(){
	return connMySQL;
}