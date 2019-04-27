const fs = require('fs');
const path = require('path');
const _ = require('underscore')._;

const sourceDir = path.join(__dirname, '../sql/');
const tableDir = path.join(sourceDir, 'tables');
const functionDir = path.join(sourceDir, 'functions');
const indexesDir = path.join(sourceDir, 'indexes');
const globalsDir = path.join(sourceDir, 'global');


