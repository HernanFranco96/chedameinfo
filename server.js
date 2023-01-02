const express = require("express");
const router = require('./src/routes/rutes.js');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
const app = express();

app.set('views', './src/views/partials');
app.set('view engine', 'hbs');

app.engine('hbs', hbs.engine({
    extname:'.hbs',
    partialsDir: __dirname + '/src/views/partials',
    layoutsDir: __dirname + '/src/views/layouts',
    defaultLayout: 'layout.hbs'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

const server = app.listen(8080, err => {
    if(err) console.log(err);
    console.log(`Servidor escuchando en ${server.address().port}`);
});