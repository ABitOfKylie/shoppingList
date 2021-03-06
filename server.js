var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require("method-override");
var logger = require("morgan");
var exphbs = require('express-handlebars');
var helpers = require('handlebars-helpers');

var app = express();
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

//set up templating engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/shops_controller.js');

app.use('/', routes);

var port = process.env.PORT || 8080;
app.listen(port);
console.log ("I'm listening on port: " +port);