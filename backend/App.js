const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config({path: './.env'})

mongoose.connect("mongodb+srv://" + process.env.DB_USER_PASS + "@ekip.xneynuc.mongodb.net/test",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});
// app.use(bodyparser.json())
// app.post('/', (req, res, next) => {
//
//     delete req.body._id;
//     const user = new User({
//         ...req.body
//     });
//     user.save()
//         .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
//         .catch(error => res.status(400).json({ error }));
// });

module.exports = app;