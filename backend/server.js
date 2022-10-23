const app = require('./App');
require('dotenv').config({path: './.env'})

app.listen( process.env.PORT || 4000, () => {
    console.log(`connexion sur le port : ${process.env.PORT}`);
});