var config = require('../config');

var Hapi = require('hapi');
var Handlebars = require('handlebars');

var env = process.env.NODE_ENV || 'dev';
var server = new Hapi.Server();

server.app.env = env;
server.app.config = config[env];
server.connection({ 
	host: server.app.config.host, 
	port: server.app.config.port 
});

server.views({
	engines: {
		htm: Handlebars
	},
	partialsPath: 'views/partials',
	path: 'views'
});

// Add the routes
var routes = require('./routes');
console.log(routes);
server.route(routes);

server.start(function () {
	console.log('Server running at:', server.info.uri);
});




