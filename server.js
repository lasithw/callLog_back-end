var http = require('http');
var app = require('./app');

var express = require('express');

var port = process.env.PORT || 3002;

var server = http.createServer(app);

var index = require('./routes/index');

app.use('/index', index);

app.listen(port, function () {
    console.log("Server is running on port: " + port);
});

