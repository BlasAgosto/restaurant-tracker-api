const mongoose = require('mongoose')

const restSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: false
  },
  thoughts: {
    type: String,
    required: false
  },
  wouldReturn: {
    type: Boolean,
    required: false
  },
  momWorthy: {
    type: Boolean,
    required: false
  },
  famWorthy: {
    type: Boolean,
    required: false
  },
  friendsWorthy: {
    type: Boolean,
    required: false
  },
  entrees: {
    type: Number,
    required: false
    // good bad just okay
  },
  apps: {
    type: Number,
    required: false
    // good bad just okay
  },
  cocktails: {
    type: String,
    require: false
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
},
{
  timestamps: true
}
)

module.exports = mongoose.model('Restaurant', restSchema)
