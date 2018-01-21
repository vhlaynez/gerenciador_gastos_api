var mysql = require('mysql');
	
var connMySQL = function(){
	console.log('conexão com o bd foi realizada');
	return mysql.createConnection({
		host:'us-cdbr-iron-east-05.cleardb.net',
		user:'bda0da44fe43da',
		password:'b5ba7da7',
		database:'heroku_494eb2faeacf1ec'
	});
}

module.exports = function(){
	return connMySQL;
}