var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var data = require('./routes/data');
var info = require('./routes/info');
var login = require('./routes/login');
var member = require('./routes/member');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
 });

app.use('/', routes);
app.use('/data', data);
app.use('/info', info);
app.use('/login', login);
app.use('/member', member);

app.use((req, res, next) => {
    res.status(200).json({
        message: 'It works!'
    });
});

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message  
        }
    }); 
});

module.exports = app;