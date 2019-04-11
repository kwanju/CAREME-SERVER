var verbose = require('../../verbose');

var pool = require('../pool').getPool(); //get pool.
const PATH = "/DB/user/registration.js";

exports.checkDupId = function (_id, _callback) {
  var query = "SELECT * FROM user WHERE id=?"
  pool.getConnection(function (_err, _conn) {
    if (_err)
      throw _err;
    _conn.query(query, [_id], function (_err, _results) {
      if (_err)
        throw _err;
     // verbose.log(PATH, "id : " + _id);
     // verbose.dir(PATH, _results);
     // verbose.log(PATH, "checkDupId : " + _results.length);

      if (_results.length > 0) // if id is dup
        _callback(true);
      else// 
        _callback(false);
    });
  });
}

exports.registration = function (_data, _callback) {
  var query = "INSERT INTO user SET ?";
  var query_serial = "SELECT max(serial) AS max FROM user";
  pool.getConnection(function (_err, _conn) {
    if (_err)
      throw _err;
    _conn.query(query_serial, function (_err, _results) { // get max serial
      if (_err)
        throw _err;
      _data.serial = _results[0].max + 1;
      _conn.query(query, _data, function (_err, _results) { // insert
        if (_err)
          throw _err;
        _callback();
      })
    });
  })
}