<link rel="icon" href="http://127.0.0.1/favicon.ico" type="image/x-icon">
<link rel="shortcut icon" href="http://127.0.0.1/favicon.ico" type="image/x-icon">

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello sizwe!');
}).listen(8000); 

	//alert("Hello vecter");

	var mysql = require('mysql');

	var con = mysql.createConnection({
		host : "localhost",
		user : "root",
		password : ""
	});

	con.connect(function(err){
		if(err) throw err;
		console.log("connected to the database");
		alert("connected to the database");
	});

	