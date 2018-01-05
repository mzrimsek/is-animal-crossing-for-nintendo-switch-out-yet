const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const port = 8080;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.resolve("./")));

app.get('/', function (req, res) {
    res.sendFile('index.html');
});

app.listen(port);
