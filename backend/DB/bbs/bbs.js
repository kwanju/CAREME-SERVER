const NUMPERPAGE = 10; // # of bb per page.

var pool = require('../pool').getPool(); //get pool.
var poolAdapter = require('../poolAdapter'); // get poolAdapter


exports.writeBoard = function (_data, _callback) {
  var query = "INSERT INTO bbs SET ?";

  pool.getConnection(function (_err, _conn) {
    if (_err)
      throw _err;
    _conn.query(query, [_data], function (_err, _results) {
      if (_err) {
        console.log(this.sql);
        throw _err;
      }
      _callback();
    });
  });
}

exports.deleteBoard = function(_data,_callback){
  var query = "UPDATE bbs SET remove=1";
  var withWhere = ' WHERE serial='+_data.serial

  pool.getConnection(function(_err,_conn){
    if(_err)
      throw _err;
    
    _conn.query(query+withWhere,function(_err,_results){
      if(_err){
        console.log(this.sql);
        throw _err;
      }
      _callback();
    });
  })
}



exports.getBbsList = function (_data, _callback) {
  var offset = (_data.page - 1) * NUMPERPAGE;

  var query = "SELECT bbs.serial, bbs.title, bbs.time, user.nickname  FROM bbs INNER JOIN user ON bbs.user_serial=user.serial ";
  var withWhere = ' WHERE bbs.remove=0 '
  var withBack = " ORDER BY bbs.serial DESC LIMIT " + NUMPERPAGE + " OFFSET " + offset;

  pool.getConnection(function (_err, _conn) {
    if (_err)
      throw _err;
    _conn.query(query +withWhere+ withBack, function (_err, _results) {
      if (_err) {
        console.log(this.sql);
        throw _err;
      }
      _callback(_results);
    });
  });
}

exports.getPages = function (_callback) {
  var query = "SELECT count(*) AS count FROM bbs INNER JOIN user ON bbs.user_serial=user.serial";
  
  pool.getConnection(function (_err, _conn) {
    if (_err)
      throw _err;
    _conn.query(query, function (_err, _results) {
      if (_err) {
        console.log(this.sql);
        throw _err;
      }
      _callback((_results[0].count % NUMPERPAGE == 0) ? Math.floor(_results[0].count / NUMPERPAGE) : Math.floor(_results[0].count / NUMPERPAGE) + 1);
    });
  });
}

exports.getBb = function (_data, _callback) {
  var query = "SELECT bbs.time, bbs.serial,bbs.title,bbs.content,user.nickname FROM bbs INNER JOIN user ON bbs.user_serial=user.serial";
  var where = " WHERE bbs.serial=?";

  pool.getConnection(function (_err, _conn) {
    if (_err)
      throw _err;
    _conn.query(query + where, [_data], function (_err, _results) {
      if (_err) {
        console.log(this.sql);
        throw _err;
      }
      _callback(_results[0]);
    })
  });
}

exports.getUserSerial = function(_data,_callback){
  var query = "SELECT bbs.user_serial FROM bbs";
  var withWhere = ' WHERE bbs.serial='+pool.escape(_data.serial);
  
  console.log(_data.serial);
  console.log(pool.escape(_data.serial));
  poolAdapter.execute(query+withWhere,function(_results){
    _callback(_results[0].user_serial);
  });
}

exports.getComments = function(_data,_callback){
  var query = "SELECT user.nickname,comment.content, comment.time, comment.serial FROM bbs_comment AS comment INNER JOIN user ON user.serial=comment.user_serial";
  var where = " WHERE comment.bbs_serial = "+pool.escape(_data.bbs_serial);

  poolAdapter.execute(query+where,function(_results){
    _callback(_results);
  });
}

exports.writeComment = function(_data,_callback){
  var date = require('../../utils/date');
  
  var query = "INSERT INTO bbs_comment(bbs_serial,user_serial,content,time) VALUES (?,?,?,?)";
  console.log(_data);

  poolAdapter.execute(query,[
    _data.bbs_serial,_data.user_serial,_data.content,date()
  ],
  function(_results){
    _callback();
  });
}