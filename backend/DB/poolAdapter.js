var pool = require('./pool').getPool();

var poolAdapter = {};

poolAdapter.execute = function(_query,_data,_callback){
  
  pool.getConnection(function(_err,_conn){
    if(_err)
      throw _err;
    
    if(typeof _data=="function") // if # of params is 2 (if type of second param is function)
      _conn.query(_query,function(_err,_results){
        if(_err){
          console.log(this.sql);
          throw _err;
        }
        _data(_results);
      });
    else if(_data != undefined) // if # of params is 3
      _conn.query(_query,_data,function(_err,_results){
        if(_err){
          console.log(this.sql);
          throw _err;
        }
        _callback(_results);
      });
  });
}

module.exports = poolAdapter;