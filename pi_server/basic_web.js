var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path')
var ds18b20 = require('ds18b20');

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'basic.html'));
});

io.on('connection', function(socket){
  console.log('a user connected');
  let intVal = null
  ds18b20.sensors(function(err, ids) {
    console.log(ids);
    intVal = setInterval(() => {
      ds18b20.temperature(ids[0], (err, value) => {
        err && console.log(err);
        console.log(`temp is ${value}C`);
        socket.emit('temp', value)
      });
    }, 1000)
    socket.on('disconnect', function(){
      clearInterval(inVal);
    });
  });

});

http.listen(3040, function(){
  console.log('listening on *:3040');
});