var express = require('express');
var app = express();
require("./router/main")(app);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(__dirname + '/folder_name'));

var server = app.listen(3000, function() {
  console.log("Express running on port 3000");
});


