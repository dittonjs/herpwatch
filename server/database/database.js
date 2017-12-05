var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://dittonjs:asdfasdf@ds121456.mlab.com:21456/herpwatch";

module.exports = class MongoDatabase {
  getReptiles(callback) {
    MongoClient.connect(url, (err, db) => {
      db.collection('reptiles').find().toArray(callback);
    });
  }

  getGenes(callback) {
    MongoClient.connect(url, (err, db) => {
      db.collection('genes').find().toArray(callback);
    });
  }

  getSpecies(callback) {
    MongoClient.connect(url, (err, db) => {
      db.collection('species').find().toArray(callback);
    });
  }

  createReptile(reptile, callback) {
    MongoClient.connect(url, (err, db) => {
      db.collection('reptiles').insertOne({
        ...reptile
      }, callback);
    });
  }

  createSpecies(species, callback) {
    MongoClient.connect(url, (err, db) => {
      db.collection('species').insertOne({
        ...species
      }, callback);
    });
  }

  createGene (gene, callback){
    MongoClient.connect(url, (err, db) => {
      db.collection('genes').insertOne({
        ...gene
      }, callback);
    });
  }

}
