const fs = require('fs');
const path = require('path');
const _ = require('underscore')._;

const sourceDir = path.join(__dirname, '../sql/');
const tableDir = path.join(sourceDir, 'tables');
const functionDir = path.join(sourceDir, 'functions');
const indexesDir = path.join(sourceDir, 'indexes');
const globalsDir = path.join(sourceDir, 'global');

const loadFiles = dir => {
	const results = [];
	const files = fs.readdirSync(dir);

	_.each(files, file => {
		if (file.indexOf('.sql') > 0) {
			const sql = fs.readFileSync(path.join(dir, file), { enconding: 'utf-8' });

			results.push(sql);
		}
	});

	return results.join('\r\n');
}

const readInit = () => {
	const initFile = path.join(sourceDir, 'init.sql');

	return fs.readFileSync(initFile, { encoding: 'utf-8' });
}

const readTables = () => loadFiles(tableDir);

const readFunctions = () => loadFiles(functionDir);

const readIndexes = () => loadFiles(indexesDir);

const readGlobals = () => loadFiles(globalsDir);

exports.readSql = () => {
	const sqlBits = [];
	sqlBits.push('--GENERATED ' + new Date());
	sqlBits.push(readInit());
	sqlBits.push(readGlobals());
	sqlBits.push(readTables());
	sqlBits.push(readFunctions());
	sqlBits.push(readIndexes());

	return sqlBits.join('\r\n');
}

