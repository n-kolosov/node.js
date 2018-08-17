var http = require('http');

http.createServer(function(req,res){
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h3>Hello world!</h3>');
}).listen(3000);

console.log('Сервер запущен на localhost:3000; нажмите Ctrl-C для завершения...');
