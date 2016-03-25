'use strict';

var mongoose = require('mongoose');



var Pet = mongoose.model('pets', {
  clientName: String,
  petName: String,
  petSex: {type: Boolean, default: false},
  petBreed: String,
  createdAt: { type: Date, default: Date.now },
  checkedIn: { type: Boolean, default: false }
});

module.exports = Pet;
