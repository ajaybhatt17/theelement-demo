var   fs = require("fs");
var https = require("https");

var express = require('express');
var app = express();

app.use(express.static('public'));

var privateKey = fs.readFileSync('./certs/localhost.key.pem').toString();
var certificate = fs.readFileSync('./certs/localhost.cert.pem').toString();

var credentials = {key: privateKey, cert: certificate};

var server = https.createServer(credentials, app);

server.listen(8000);
