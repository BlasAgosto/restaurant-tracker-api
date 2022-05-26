const mongoose = require('mongoose')

const restSchema = new mongoose.Schema(
  {
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
      type: String,
      required: false
    },
    famWorthy: {
      type: String,
      required: false
    },
    friendWorthy: {
      type: String,
      required: false
    },
    entrees: {
      type: String,
      required: false
      // good bad just okay
    },
    apps: {
      type: String,
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
