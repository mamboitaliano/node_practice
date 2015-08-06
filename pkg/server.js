var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var request = require('request');


require("./router/main")(app);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));

var server = app.listen(3000, function() {
  console.log("Express running on port 3000");
});

var dishwashers = "https://data.energystar.gov/resource/energy-star-certified-residential-dishwashers.json"
var pass_this_to_router = undefined;
request(dishwashers, function (error, response, dishwasher_list) {
  if (!error && response.statusCode == 200) {
    pass_this_to_router = dishwasher_list;
    console.log(dishwasher_list);
  }
})


