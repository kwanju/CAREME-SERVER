var verbose = require('../../verbose');

var pool = require('../pool').getPool(); //get pool.
const PATH = "/DB/user/login.js";

exports.login = function (_id, _pw, _callback) {
  var query = "SELECT * FROM user WHERE id=? AND pw=?"
  pool.getConnection(function (_err, _conn) {
    if (_err)
      throw _err;
    _conn.query(query, [_id, _pw], function (_err, _results) {
      if (_err)
        throw _err;

      verbose.dir(PATH, _results);

      if (_results.length > 0) // if login success
        _callback(_results);
      else// if login fail.
        _callback(null);
    });
  });
}