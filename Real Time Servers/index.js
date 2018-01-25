var express = require('express');
var app = express();
var i = 0;


app.use(express.static('public'))

app.listen(8000);
