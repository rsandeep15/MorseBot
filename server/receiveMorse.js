var http = require("http");
var Db = require('mongodb').Db;
MongoClient = require('mongodb').MongoClient;
function onRequest(request, response){
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Messages: \n");
	var mongoURL = "mongodb://morsebot:password@ds161475.mlab.com:61475/qpfallteam3";
	MongoClient.connect(mongoURL,
	function(err, db) {
		var cursor = db.collection('qpfallteam3').find();
		cursor.each(function(err, entry){
			if(entry == null){
					db.close();
					response.end();
			}
			else {
				response.write(entry.a + "");
			}
		});
	});
}
http.createServer(onRequest).listen(8008);
