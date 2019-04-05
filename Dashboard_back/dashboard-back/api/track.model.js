const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Track = new Schema({
  Title: {
    type: String
  },
  Duration: {
    type: Number
  },
  Listenings: {
    type: Number
  },
  Likes: {
    type: Number
  }
},{
    collection: 'Track'
});

module.exports = mongoose.model('Track', Track);