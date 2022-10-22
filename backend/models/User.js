const mongoose = require('mongoose');
const userShema = mongoose.Schema({
    nom: {type: String, required:true},
    prenom: {type: String, required:true},
    email: {type: String, required:true},
    mdp: {type: String, required:true},
});

//module.exports = mongoose.models('User', userShema);