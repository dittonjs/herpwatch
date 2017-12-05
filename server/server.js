const express = require('express')
const MongoDatabase = new (require('./database/database'));
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.get('/reptiles', (req, res) => {
  console.log('get /reptiles')
  res.setHeader('Content-Type', 'application/json');
  MongoDatabase.getReptiles((err, doc) => {
    err && console.log(err);
    res.send({ reptiles: doc });
  });
});

app.get('/species', (req, res) => {
  console.log('get /species')
  res.setHeader('Content-Type', 'application/json');
  MongoDatabase.getSpecies((err, doc) => {
    err && console.log(err);
    res.send({ species: doc });
  });
});

app.post('/reptiles', (req, res) => {
  console.log('post /reptiles')
  MongoDatabase.createReptile(req.body, (err, doc) => {
    console.log(doc);
    err && console.log(err);
    res.setHeader('Content-Type', 'application/json');
    res.send({ reptile: doc });
  });
});

app.listen('8000', () => console.log('server running on 8000'))