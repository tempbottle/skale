#!/usr/local/bin/node --harmony

// stream -> collect

var co = require('co');
var ugrid = require('../..');

co(function *() {
	var uc = yield ugrid.context();
	console.assert(uc.worker.length > 0);

	uc.stream(process.stdin, {N: 3}).collect(function(err, res) {
		console.log('res: ' + res);
	});

	// uc.end();
}).catch(ugrid.onError);
