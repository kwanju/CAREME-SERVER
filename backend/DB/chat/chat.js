var verbose = require('../../verbose');
var poolAdapter = require('../poolAdapter'); // 데이터베이스 풀 어뎁터.

exports.saveMessage = function (_data, _callback) {
    var sql = "INSERT INTO chat_user_shelter(type,user_idx,shelter_idx,message,send_time,read_state) ";
    var values = "VALUES (?,?,?,?,?,?)";

    var date = require('../../utils/date')();
    poolAdapter.execute(sql + values, [_data.type, _data.user_idx, _data.shelter_idx, _data.message, date, _data.read_state], function (_results) {
        _callback(_results.insertId);
    });
}//discover_request에 insert

exports.ackMessage = function (_data, _callback) {
    var update = "UPDATE chat_user_shelter SET read_state=1 WHERE idx=?";
    poolAdapter.execute(update, [_data.message_idx], function () {
        _callback();
    });
}

exports.getPushInfoInChat = function (_data, _callback) {
    var select = "SELECT u.token, she.name, cus.message ";
    var from = "FROM user AS u INNER JOIN shelter AS she INNER JOIN chat_user_shelter AS cus ";
    var on = "ON cus.user_idx = u.idx AND cus.shelter_idx=she.idx ";
    var where = "WHERE cus.idx = ?"
    poolAdapter.execute(select + from + on + where, [_data.idx], function (_results) {
        _callback(_results);
    });
}