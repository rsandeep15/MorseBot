var http = require("http");
var Db = require('mongodb').Db;
MongoClient = require('mongodb').MongoClient;
function onRequest(request, response){
	response.writeHead(200, {"Content-Type": "text/plain"});
	var mongoURL = "mongodb://morsebot:password@ds161475.mlab.com:61475/qpfallteam3";
	MongoClient.connect(mongoURL,
	function(err, db) {
		db.collection('qpfallteam3').insert(request,
		function(err, entry){
			if (err){
				console.log("Could not insert entry");
			}
			response.end(); 
		});
	});
}
http.createServer(onRequest).listen(8005);
