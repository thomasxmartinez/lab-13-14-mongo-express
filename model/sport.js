'use strict';

const mongoose = require('mongoose');

const sportSchema = mongoose.Schema({
  sport: {type: String, required: true},
  network:{type: String, required: true},
  announcer: {type: String, required: true},
  created: {type: Date, required: true, default: Date.now},
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'comment' }],
});

// creates sports collection and Sport constructor
module.exports = mongoose.model('sport', sportSchema);
