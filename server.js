var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var port = 3000;

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.resolve("./")));

app.get('/', function (req, res) {
    res.sendFile('index.html');
});

app.listen(port);
exports = module.exports = app;
