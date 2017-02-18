var express = require('express');
var app = express();
app.get('/', function (req, res) {
	res.send('Dratuti!');
});

app.listen(7777, function () {
	console.log('Ya labotau!');
});