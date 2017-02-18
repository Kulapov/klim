var express = require('express');
var app = express();
app.get('/', function (req, res) {
	res.send('Дратути!');
});

app.listen(591, function () {
	console.log('Я лаботаю!');
});