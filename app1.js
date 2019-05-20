var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));





app.get('/showName/:name', (req, res) => {
  var response;
  var data = JSON.stringify({
      name: req.params.name
    })
  var options = {
      host: "localhost",
      port: 3001,
      path: "/getName",
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(data)
      }
  };


  var request = http.request(options, (resp) => {
    resp.setEncoding('utf8');
    resp.on('data', function(data){
      response = data;
      console.log('response: ' + response);
    });
    resp.on('end', function(){
      console.log('localhost:3001 ended post');
      res.send('<h3>'+response+'</h3>');
    })
  });
  request.write(data);
  request.end();


});

app.get('/', (req, res) => {
  res.send('<h3>Hello from APP1</h3>');
});

app.listen(3000, () => {
  console.log("APP 1 levantada");
});
