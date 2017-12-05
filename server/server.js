const express = require('express')
const MongoDatabase = new (require('./server/database'));
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/reptiles', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  MongoDatabase.getReptiles((err, doc) => {
    res.send(JSON.stringify(doc));
  });
  res.send(JSON.stringify({ reptiles: [] }))
});

app.post('/reptiles', (req, res) => {
  MongoDatabase.createReptile(req.body, (err, doc) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(doc));
  });
});

app.listen('8000', () => console.log('server running on 8000'))