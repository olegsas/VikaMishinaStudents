var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    app = express(),
    routes = require('./routes/router.js');

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api', routes);

app.listen(8080);
console.log('App listen on port 8080');

module.exports = app;