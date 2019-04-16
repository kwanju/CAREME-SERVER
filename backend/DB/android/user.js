
var poolAdapter = require('../poolAdapter'); // 데이터베이스 풀 어뎁터.

exports.login = function(_data,_callback){
    var sql = "SELECT * FROM user WHERE id=? AND pw=?"
    poolAdapter.execute(sql,[_data.id,_data.pw],function(_res){
        _callback(_res);
    })
}