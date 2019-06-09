var poolAdapter = require('../poolAdapter'); // get poolAdapter

exports.getNewChatList = function (_data, _callback) {
    var select = "SELECT u.nickname, cus.user_idx , COUNT(*) AS count "
    var from = "FROM chat_user_shelter AS cus INNER JOIN user AS u "
    var on = "ON cus.user_idx = u.idx "
    var where = "WHERE cus.shelter_idx = ? AND cus.read_state = 0 AND cus.type=0 "
    var groupBy = "GROUP BY cus.user_idx ORDER BY user_idx "
    poolAdapter.execute(select + from + on + where + groupBy, [_data.shelter_idx], function (_results) {
        _callback(_results);
    });
}

exports.getChatList = function (_data, _callback) {
    var select = "SELECT u.nickname, cus.user_idx , cus.message, maxCus.recent_send_time "
    var from = "FROM chat_user_shelter AS cus INNER JOIN user AS u INNER JOIN "
    var maxSelect = "(SELECT MAX(send_time) AS recent_send_time FROM chat_user_shelter WHERE shelter_idx=? group by user_idx) AS maxCus "
    var on = "ON cus.user_idx = u.idx AND maxCus.recent_send_time = cus.send_time "
    var where = "WHERE cus.shelter_idx = ? "
    var groupBy = "GROUP BY cus.user_idx ORDER BY user_idx "
    poolAdapter.execute(select + from + maxSelect + on + where + groupBy, [_data.shelter_idx,_data.shelter_idx], function (_results) {
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

exports.updateChatNotRead = function (_data, _callback) {
    var update = "UPDATE chat_user_shelter SET read_state=1 WHERE user_idx=? AND type=0"
    poolAdapter.execute(update, [_data.user_idx], function () {

    });
}

exports.getShelter = function (_data, _callback) {
    var select = "SELECT * FROM shelter WHERE idx = ?";
    poolAdapter.execute(select, [_data.shelter_idx], function (_results) {
        _callback(_results)
    });
}

exports.checkChatReadState = function (_data, _callback) {
    var select = "SELECT idx ";
    var from = "FROM chat_user_shelter "
    var where = "WHERE read_state = 0 AND shelter_idx=? AND type=0";

    poolAdapter.execute(select + from + where, [_data.idx], function (_results) {
        _callback(_results);
    });
}