const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    posterId: {
      type: String,
      required: true
    },
    message: {
      type: String,
      trim: true,
      maxlength: 500,
        required : true,
    },
    picture: {
      type: String,
    },
    // A tester car pour l'instant je n'ai pas essayé
    video: {
      type: String,
    },
    likers: {
      type: [String],
    },
    comments: {
      type: [
        {
          commenterId: String,
          nom: String,
          text: String,
          timestamp: Number,
        }
      ],
      // Pour avoir le tableau créé de base
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('post', PostSchema);