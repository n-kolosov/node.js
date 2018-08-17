var http = require('http');

http.createServer(function(req,res){
  var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
  switch(path) {
  case '':
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Homepage');
    break;
  case '/about':
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<meta content="text/html; charset=utf-8" http-equiv="content-type">О сайте');
    break;
  default:
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<meta content="text/html; charset=utf-8" http-equiv="content-type">Страница 404');
    break;
    }
}).listen(3000);

console.log('Сервер запущен на localhost:3000; нажмите Ctrl-C для завершения...');
