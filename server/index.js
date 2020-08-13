var http = require('http');
var express = require('express');
var socketio = require('socket.io');
var cors = require('cors');

var router = require('./router');

var app = express();
var server = http.createServer(app);
var io = socketio(server);

app.use(cors());
app.use(router);


app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

io.on('connection', function(socket){
  console.log('user connected');
  socket.on('chat message', function(msg) {
    io.emit('chat message', msg);
  });
  
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

app.use(router);

server.listen(process.env.PORT || 3000, () => console.log(`Server has started.`));
