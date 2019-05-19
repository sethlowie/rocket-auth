// HELPERS
var Massive = require('massive');
var fs = require('fs');
var path = require('path');

var db = Massive.loadSync({ connectionString: 'postgresql://postgres:postgres@localhost:5432/rocket-auth' });

module.exports =  function() {
  var builder = require('../../lib/builder');
  var sql = builder.readSql();
  
  this.initDb = function(next) {
    db.run(sql, function(err, res) {
      if (err) {
        console.error('ERROR -- ', err)
        next(err, null);
      } else {
        console.log('RESULTS --', res)
        next(null, res);
      }
    });
  }
}

