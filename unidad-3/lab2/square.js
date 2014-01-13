var logic = require('./logic');

exports.get = function(req, res){
	res.writeHead(200, {
		'Content-Type' : 'text/html'

	});

	res.end(
		logic.page('Squared', logic.navbar(),
			[
				(!isNaN(req.a) ?
					('<p>{a} squared = {sq}</p>'
					  .replace('{a}', req.a)
					  .replace('{sq}', req.a * req.a))
					:''),
				'<p>Insert number for calculate square</p>',
				'<form name="square" action="/square" method="get">',
				'of: <input type="text" name="a">',
				'</form>'
			].join('\n'))
		);
}