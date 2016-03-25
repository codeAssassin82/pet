'use strict';

var express = require('express');
var router = express.Router();
var moment = require('moment');

var Pet = require('../models/pet');
var Customer = require('../models/pet');

router.get('/', function(req, res, next) {
  Pet.find({}, function(err, pet) {
    if(err) return res.status(400).send(err);
    res.send(pet);
  });
});

// all pet between an hour ago and end of day
// that are not checked in
router.get('/upcoming', function(req, res) {
  var anHourAgo = moment().subtract(1, 'hour').toDate();
  var endOfToday = moment().endOf('day').toDate();

  Pet.find({
      time: {
        '$gte': anHourAgo,
        '$lte': endOfToday
      },
      checkedIn: false
    }, function(err, pet) {
      if(err) return res.status(400).send(err);
      res.send(pet);
    });
})

router.get('/:id', function(req, res) {
  Pet.findById(req)
})


router.get('/today', function(req, res, next) {
  var startOfToday = moment().startOf('day').toDate();
  var endOfToday = moment().endOf('day').toDate();

  Pet.find({time: {'$gte': startOfToday, '$lte': endOfToday }}, function(err, pet) {
    if(err) return res.status(400).send(err);
    res.send(pet);
  });
});

router.post('/', function(req, res) {
  var pet = new Pet(req.body);
  pet.save(function(err, savedPet) {
    res.status(err ? 400 : 200).send(err || savedPet);
  });
});

// toggle checkin
router.put('/:id/checkin', function(req, res) {
  Pet.findById(req.params.id, function(err, pet) {
    if(err) return res.status(400).send(err);
    pet.checkedIn = !pet.checkedIn;
    pet.save(function(err, savedPet) {
      res.status(err ? 400 : 200).send(err || savedPet);
    });
  });
});

router.put('/:petId/addClient/:clientId', function(req, res) {
  Pet.findById(req.params. petId, fucntion(err, pet){
    if()
  }
    client.findById(req.params. petId, fucntion(err, pet) {

  })


});


// general update
router.put('/:id', function(req, res) {
  Pet.findByIdAndUpdate(req.params.id,
    { $set: req.body },
    { new: true },
    function(err, pet) {
      res.status(err ? 400 : 200).send(err || pet);
    });
});




module.exports = router;
