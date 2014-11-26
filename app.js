var express = require('express');
var http = require('http');
var favicon = require('serve-favicon');

// Start express application
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));
app.use(express.favicon(__dirname + '/public/images/favicon.ico'));

//==================================================================
// routes
/*app.get('/', function(req, res){
	res.render(__dirname + '/views/index.html');
});*/

//==================================================================

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
