var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');


/* GET users listing. */
router.get('/', function (req, res, next) {

  res.send('Users home page');

});

module.exports = router;
