var routes = [];

routes.push({
	method: 'GET',
	path: '/', 
	handler: function (request, reply) {
		reply.view('home.htm', {cache_date: '2015-07-22'});
	}
});

module.exports = routes;
