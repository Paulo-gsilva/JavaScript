require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTMONGO)
    .then(() => {
        console.log('Sinal Emitido');
        app.emit('Banco de dados carregado'); //emitindo sinal para verificar a conexão com o banco de dados
    })
    .catch(e => console.log(e));
const MongoStore = require('connect-mongo'); //salva os dados no banco de dados
const session = require('express-session');
const flash = require('connect-flash');
const routes = require('./routes');
const path = require('path');
const helmet = require('helmet');
const crsf = require('csurf');
const {middlewareGlobal, checkCrsfError, csfrMiddleware} = require('./src/middlewares/middleware');

app.use(helmet());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));
const sessionOptions = session({
    secret: 'ahsdiaushdisahdiahdiuahd',
    //store: new MongoStore({mongooseConnection: mongoose.connection}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, //dado armazenado no cookie dura 7 dias
        httpOnly: true
    },
    store: MongoStore.create({ mongoUrl: process.env.CONNECTMONGO})
});
app.use(sessionOptions);
app.use(flash());
app.use(crsf());
app.use(middlewareGlobal);
app.use(checkCrsfError);
app.use(csfrMiddleware);
app.use(routes);

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.on('Banco de dados carregado', () => {
    app.listen(3000, () => {
        console.log('http://localhost:3000');
        console.log('Executando Na Porta 3000');
    });
})