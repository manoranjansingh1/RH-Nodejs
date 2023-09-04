var http=require("http");
http.createServer(function(request, response){
    response.write("Hello guys");
    response.end();
}).listen(8080)