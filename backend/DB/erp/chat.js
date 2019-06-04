var poolAdapter = require('../poolAdapter'); // get poolAdapter

exports.getNewChatList = function (_data, _callback) {
    var select = "SELECT u.nickname, cus.user_idx , COUNT(*) AS count "
    var from = "FROM chat_user_shelter AS cus INNER JOIN user AS u "
    var on = "ON cus.user_idx = u.idx "
    var where = "WHERE cus.shelter_idx = ? AND cus.read_state = 0 "
    var groupBy = "GROUP BY cus.user_idx ORDER BY user_idx "
    poolAdapter.execute(select + from + on + where + groupBy, [_data.shelter_idx], function (_results) {
        _callback(_results);
    });
}

exports.getChatList = function (_data, _callback) {
    var select = "SELECT u.nickname, cus.user_idx , MAX(cus.send_time) AS recent_send_time, cus.message "
    var from = "FROM chat_user_shelter AS cus INNER JOIN user AS u "
    var on = "ON cus.user_idx = u.idx "
    var where = "WHERE cus.shelter_idx = ? "
    var groupBy = "GROUP BY cus.user_idx ORDER BY user_idx "
    poolAdapter.execute(select + from + on + where + groupBy, [_data.shelter_idx], function (_results) {
        _callback(_results);
    });
};

exports.getChat = function (_data, _callback) {
    var select = "SELECT * FROM chat_user_shelter ";
    var where = "WHERE shelter_idx = ? AND user_idx = ? ";
    poolAdapter.execute(select + where, [_data.shelter_idx, _data.user_idx], function (_results) {
        _callback(_results);
    });
}