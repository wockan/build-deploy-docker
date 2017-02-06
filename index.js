const http = require('http');
const _ = require('lodash')

http.createServer(function(request, response) {
  if (request.method === 'GET' && request.url === '/hello') {
    
    const random = _.sample([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

    response.end(`Hello world ... ${random}`)
  } else {
    response.statusCode = 404;
    response.end();
  }
}).listen(8080);
