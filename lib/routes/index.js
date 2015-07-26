var routes = [];
var site = require('./site');

routes = routes.concat(site);

routes.push({
	method: 'GET',
	path: '/assets/{path*}',
	handler: {
		directory: { path: './public/assets', listing: false, index: true }
	}
});

module.exports = routes;

