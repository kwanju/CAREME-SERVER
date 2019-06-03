var verbose = require('../../verbose');
var poolAdapter = require('../poolAdapter'); // 데이터베이스 풀 어뎁터.

exports.saveMessage = function (_data, _callback) {
    var sql = "INSERT INTO chat_user_shelter(type,user_idx,shelter_idx,message,send_time) ";
    var values = "VALUES (?,?,?,?,?)";

    var date = require('../../utils/date')();
    poolAdapter.execute(sql + values, [_data.type, _data.user_idx, _data.shelter_idx, _data.message, date], function (_results) {
        _callback(_results.insertId);
    });
}//discover_request에 insert