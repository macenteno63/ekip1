const app = require('./App');
require('dotenv').config({path: './.env'})
const bodyParser = require('body-parser');
const userRoutes = require('../routes/user.routes');
const cors = require('cors')


const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors(corsOptions));
//routes
app.use('/api/user', userRoutes);



//server
app.listen( process.env.PORT || 4000, () => {
    console.log(`connexion sur le port : ${process.env.PORT}`);
});
app.get('/', (req, res) => {
    res.send('Hello World!')
})