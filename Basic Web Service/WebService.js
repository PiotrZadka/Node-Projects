var http = require("http");
http.createServer(function(request,response){
  response.writeHead(404,{'Content-type':'image/png'});
  response.end("/aaa.png");

}).listen(8000);
