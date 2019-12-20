var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var cors = require('cors');

var router = require('./router');

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

http.listen(3001, function(){
  console.log('listening on *:3001');
});