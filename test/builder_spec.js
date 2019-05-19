var builder = require('../lib/builder');
var assert = require('assert');
var Helpers = require('./helpers');

var helper = new Helpers();

describe('SQL Builder', () => {
  before(done => {
    helper.initDb(done);
  });
  it('loads', () => {
    assert(builder);
  });

  describe('loading SQL', () => {
    it('returns a SQL string', () => {
      var sql = builder.readSql();
      console.log(sql);
      assert(sql);
    });
    it('runs the script', () => {

    })
  });
});

