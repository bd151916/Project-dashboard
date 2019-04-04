var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
  var mongoose = require('mongoose');


/* GET users listing. */
router.get('/insert', function (req, res, next) {

  // Connect to the db

  
  mongoose.connect('mongodb://localhost:27017/Dashboard', { useNewUrlParser: true });
  //mongoose.connect('localhost:27017', { useNewUrlParser: true });
 
  var db = mongoose.connection;
  db.once('open', function () {
    res.send('Mongoose connection established');
  });




});

module.exports = router;
