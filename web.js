var express = require('express');
var fs = require('fs');
var buffer = new Buffer(fs.readFileSync("index.html"));
var app = express();
var fileContent = buffer.toString()

app.use(express.logger());


app.get('/', function(request, response) {
  response.send(fileContent);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
