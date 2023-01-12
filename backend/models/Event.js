const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema(
  {
    posterId: {
      type: String,
      required: true
    },
    titre: {
      type: String,
      trim: true,
      maxlength: 100,
    },
    date: {
      type: Date,
    },
    description: {
      type: String,
      maxlength: 500,
    },
    nbPlaces: {
      type : Number,
    },
    picture: {
      type: String,
    },
    // estInscrit:{
    //   type: Boolean,
    // }
    // Dans User il faudrait que la personnes puisse consulter les events auquels elle est inscrite
    inscrits: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('event', EventSchema);