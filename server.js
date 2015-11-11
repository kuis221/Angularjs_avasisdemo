var express = require("express");
var slashes = require("connect-slashes");
var app = express();

app.use(express.basicAuth('avasis', 'demo'));
app.use(express.logger());
app.use(express.static('www'));
app.use('/app', express.static('public'));
app.use('/app/assets', express.static('www/assets'));
app.use(slashes());

var port = process.env.PORT || 5000;

app.listen(port, function () {
    console.log("Listening on " + port);
});