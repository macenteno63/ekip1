const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect('mongodb+srv://macenteno:toto@ekip.xneynuc.mongodb.net/test',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

// app.use((req,res,next)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', '*');
//     res.setHeader('Access-Control-Allow-Origin', '*');
// })
// app.use(bodyparser.json())
app.post('/', (req, res, next) => {

    delete req.body._id;
    const user = new User({
        ...req.body
    });
    user.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
        .catch(error => res.status(400).json({ error }));
});
module.exports = app;