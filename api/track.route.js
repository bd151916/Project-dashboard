// business.route.js

const express = require('express');
const trackRoutes = express.Router();

// Require Business model in our routes module
let Track = require('./track.model');

// Defined store route
trackRoutes.route('/add').post(function (req, res) {
  let track = new Track(req.body);
  track.save()
    .then(track => {
      res.status(200).json({'track': 'track in added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
trackRoutes.route('/').get(function (req, res) {
    Track.find(function(err, businesses){
    if(err){
      console.log(err);
    }
    else {
      res.json(businesses);
    }
  });
});

// Defined edit route
trackRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Track.findById(id, function (err, track){
      res.json(track);
  });
});

//  Defined update route
trackRoutes.route('/update/:id').post(function (req, res) {
    Track.findById(req.params.id, function(err, track) {
    if (!track)
      res.status(404).send("data is not found");
    else {
        track.Title = req.body.Title;
        track.Duration = req.body.Duration;
        track.Listenings = req.body.Listenings;
        track.Likes = req.body.Likes;


        track.save().then(track => {
          res.json('Update complete');
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
trackRoutes.route('/delete/:id').get(function (req, res) {
    Track.findByIdAndRemove({_id: req.params.id}, function(err, track){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = trackRoutes;
