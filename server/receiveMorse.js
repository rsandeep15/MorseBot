var http = require("http");
var Db = require('mongodb').Db;
MongoClient = require('mongodb').MongoClient;
function onRequest(request, response){
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.writeHead(200, {"Content-Type": "text/plain"});
	var mongoURL = "mongodb://morsebot:password@ds161475.mlab.com:61475/qpfallteam3";
	MongoClient.connect(mongoURL,
	function(err, db) {
		// Return the last six messages
		db.collection('MorseBot').count(function(err, count){
			var cursor = db.collection('MorseBot').find().skip(count - 6);
			cursor.each(function(err, entry){
				if(entry == null){
						db.close();
						response.end();
				}
				else {
					if (entry.source == "pi"){
						response.write(entry.source + ":" + entry.morse + " ");
						response.write(entry.english+ "\n");
					}
					else {
						response.write(entry.source + ":" + entry.morse + " ");
						response.write(entry.english + "\n");
					}
					response.write("\n");
				}
			});
		});

	});
}
http.createServer(onRequest).listen(8008);
