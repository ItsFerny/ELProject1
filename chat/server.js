var Hapi = require('hapi');
var Path = require('path');

var server = new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: Path.join(__dirname, 'public')
      }
    }
  }
});

server.connection({ port: 3000 });
server.register(require('inert'), function(err) {
  if(err) {
    throw err;
  }

server.route({
method: 'GET',
path: '/{param*}',
handler: {
  directory: {
    path: '.',
    redirectToSlash: true,
    index: true
    }
  }
});

var io = require("socket.io")(server.listener);
var numConnected = 0;
io.on('connection', function(socket) {
  numConnected++;
  console.log('connected: ' + numConnected);


  socket.on('io:message', function(message) {
    var str = JSON.stringify({
      msg: message,
      time: new Date().getTime(),
      name: 'Dylan' + numConnected,
    });
    console.log('new message', str);
    socket.emit('message', str);
    socket.broadcast.emit('message', str);
  })
});


server.start(function() {
  console.log('Server started at: ' + server.info.uri);
});


})
