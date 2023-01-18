const express = require("express");
const router = require('./src/routes/rutes.js');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
const { socket } = require('./src/socket/socket');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/public/uploads', express.static(__dirname + '/public/uploads'));
app.use(express.static('public'));

app.set('views', './src/views/partials');
app.set('view engine', 'hbs');

app.engine('hbs', hbs.engine({
    extname:'.hbs',
    partialsDir: __dirname + '/src/views/partials',
    layoutsDir: __dirname + '/src/views/layouts',
    defaultLayout: 'layout.hbs'
}));

app.use(router);

socket(app);

