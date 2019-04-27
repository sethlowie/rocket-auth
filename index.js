var program = require('commander');

program
	.command('build')
	.description('Build the SQL')
	.action(() => {
		console.log('build the sql');
	});

program
	.command('install [env]')
	.description('Build the SQL')
	.action((env = 'dev') => {
		console.log(`installing for ${env}`);
	});

program.parse(process.argv);

