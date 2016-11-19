var http = require("http");
var url = require("url");
var Db = require('mongodb').Db;
MongoClient = require('mongodb').MongoClient;
function onRequest(request, response){
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.writeHead(200, {"Content-Type": "text/plain"});
	var mongoURL = "mongodb://morsebot:password@ds161475.mlab.com:61475/qpfallteam3";
	var queryData = url.parse(request.url, true).query;
	MongoClient.connect(mongoURL,
	function(err, db) {
    var field = queryData.field;
    db.collection('MorseBot').find().toArray(function(err, items){
      var count = 0;
      var freq = {}
      freq['.'] = 0;
      freq['-'] = 0;
      items.forEach(function(element){
        if (field == 'morse'){
          var item = element['morse'];
          for (var i = 0; i < item.length;i++){
            var character = item.charAt(i);
            if (character == '.' || character == '-'){
              freq[character]++;
            }
          }
        }
      })
      response.write(JSON.stringify(freq), function(){
            response.end();
      });
    });
	});
}
http.createServer(onRequest).listen(8085);
