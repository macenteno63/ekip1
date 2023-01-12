const app = require('./App');
require('dotenv').config({path: './.env'})
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');
const eventRoutes = require('./routes/event.routes');
const {checkUser, requireAuth} = require('./controllers/cookie.controller');
const { createServer } = require("http");
const cors = require('cors')
const { Server } = require ("socket.io");

//app.use(cors());
const corsOptions = {
    origin: "*",
    credentials: true,
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
// jwt
app.get('*', checkUser);
app.get('/jwtid', requireAuth, (req, res) => {
    res.status(200).send(res.locals.user._id)
});
//app.use(cors(corsOptions));
//routes
app.use('/api/user', userRoutes);
app.use('/api/post',postRoutes);
app.use('/api/event',eventRoutes);



app.get('/', (req, res) => {
    res.send('Hello World!')
})



const io = new Server(5000,{
    cors: {
        origin : 'http://localhost:3000',
        credentials:true,
    }
});

io.on("connection", (socket) => {
    // send a message to the client
    socket.on('sendMessage', (data) => {
    console.log(`Message reçu de ${data.sender} : ${data.message}`);


    // Transmet le message à tous les clients connectés, sauf l'expéditeur
    socket.broadcast.emit('receiveMessage', data);
  });

    // receive a message from the client
    socket.on("hello from client", (...args) => {
        console.log("bien recu client->server")
    });
});

//server
app.listen( process.env.PORT || 4000, () => {
    console.log(`connexion sur le port : ${process.env.PORT}`);
});