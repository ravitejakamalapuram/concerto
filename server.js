var express = require('express');
var app = express();
const fs = require('fs');

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.use('/', express.static(__dirname + '/www'));

app.listen(port, ip);
console.log("lisening at, ", port);