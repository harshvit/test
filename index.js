var http = require('http');

function handle(req , res)
{
	var out = {
			"error" : null ,
			"data" : 420
		}
	res.writeHead(200 , {"content-Type":"application/json"});
	res.end(JSON.stringify(out));
}

var s = http.createServer(handle);
s.listen(process.env.PORT||3000 , function(){ console.log("Started the server"); });
