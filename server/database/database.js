var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://dittonjs:asdfasdf@ds121456.mlab.com:21456/herpwatch";

module.exports = class MongoDatabase {
  createReptile(reptile, callback) {
    MongoClient.connect(url, (err, db) => {
      db.collection('reptiles').insertOne({
        ...reptile
      }, callback);
    });
  }
}
