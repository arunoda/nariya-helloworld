var exec = require('child_process').exec;
var timeout = process.argv[2];

function execute() {
	
	console.info('job started at: %s', new Date());
	exec('./auto-commit.sh', function(err, out, eout) {
		
		if(err) {
			console.error('error when executing the job at: %s - err: %s', new Date(), JSON.stringify(err));
		} else {
			console.info('job succeeded at: %s', new Date());
		}
		setTimeout(function() {
			execute();
		}, timeout);
	});
}

execute();
