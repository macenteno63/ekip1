const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = mongoose.Schema({
    nom: {
        type: String,
        required:true,
        minLength: 3,
        maxLength: 55,
        unique: true,
        trim: true
    },
    prenom: {
        type: String,
        required:true,
        minLength: 3,
        maxLength: 55,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        minlength: 6
    },
    picture: {
      type: String,
      default: "./uploads/profil/random-user.png"
    },
    bio :{
      type: String,
      max: 1024,
    },

    // Tester de follow une personnes et de voir les personnes qui nous suivent !

    followers: {
      type: [String]
    },
    following: {
      type: [String]
    },
    likes: {
      type: [String]
    },
    // Voir ça pour que la personne puisse consulter les évènement auquels elle participe
    inscrites: {
      type: [String]
    }
  },
  {
    timestamps: true,
  }
);
userSchema.pre("save", async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const UserModel = mongoose.model("user", userSchema);

UserModel.login = async function(email, password) {
    const user = await UserModel.findOne({ email: email });
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect email')
};
module.exports = UserModel;