var http = require("http");
var url = require("url");
var Db = require('mongodb').Db;
MongoClient = require('mongodb').MongoClient;
function onRequest(request, response){
	response.writeHead(200, {"Content-Type": "text/plain"});
	var mongoURL = "mongodb://morsebot:password@ds161475.mlab.com:61475/qpfallteam3";
	var queryData = url.parse(request.url, true).query;
	MongoClient.connect(mongoURL,
	function(err, db) {
		var entry = {"text" : queryData.text};
		db.collection('qpfallteam3').insert(entry,
		function(err, entry){
			if (err){
				console.log("Could not insert entry");
				console.log(entry);
			}
			response.end();
		});
	});
}
http.createServer(onRequest).listen(8005);
