var poolAdapter = require('../poolAdapter'); // 데이터베이스 풀 어뎁터.

exports.getShelterByCategory = function(_data,_callback){
    var sql = "SELECT idx,name,position,phone_number FROM shelter ";
    var where = "WHERE position LIKE '%"+_data.big+"%' AND position LIKE '%"+_data.small+"%'";
    poolAdapter.execute(sql+where,function(_results){
        _callback(_results);
    });
}