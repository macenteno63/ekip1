const app = require('./App');
require('dotenv').config({path: './.env'})
const bodyParser = require('body-parser');
const userRoutes = require('../routes/user.routes');
const cors = require('cors')

//app.use(cors());
// const corsOptions = {
//     origin: "*",
//     credentials: false,
//     'allowedHeaders': ['sessionId', 'Content-Type'],
//     'exposedHeaders': ['sessionId'],
//     'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     'preflightContinue': false
// }
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
//     next();
// });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//app.use(cors(corsOptions));
//routes
app.use('/api/user', userRoutes);



//server
app.listen( process.env.PORT || 4000, () => {
    console.log(`connexion sur le port : ${process.env.PORT}`);
});
app.get('/', (req, res) => {
    res.send('Hello World!')
})