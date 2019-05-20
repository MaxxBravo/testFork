var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/', (req, res) => {
  res.send('<h3>Hello from APP2</h3>');
});

app.post('/getName', (req, res) => {
  console.log(req.body);
  res.send('MAXI');
  // res.send('Maxi')
});

app.listen(3001, () => {
  console.log("APP 2 levantada");
});
