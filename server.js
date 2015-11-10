var express = require("express");
var app = express();

app.use(express.basicAuth('avasis', 'demo'));
app.use(express.logger());
app.use(express.static('www'));
app.use('/app', express.static('public'));
app.use('/app/assets', express.static('www/assets'));

var port = process.env.PORT || 5000;

app.listen(port, function () {
    console.log("Listening on " + port);
});