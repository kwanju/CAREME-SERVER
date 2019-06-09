var poolAdapter = require('../poolAdapter');

exports.getNewChatList = function (_data, _callback) {
    var select = "SELECT shelter_idx , COUNT(*) AS count "
    var from = "FROM chat_user_shelter "
    var where = "WHERE user_idx = ? AND read_state = 0 AND type=1 "
    var groupBy = "GROUP BY shelter_idx ORDER BY shelter_idx "
    poolAdapter.execute(select + from + where + groupBy, [_data.user_idx], function (_results) {
        _callback(_results);
    });
}

exports.getChatList = function (_data, _callback) {
    var select = "SELECT she.name AS shelterName, cus.shelter_idx , cus.message, maxCus.recent_send_time "
    var from = "FROM chat_user_shelter AS cus INNER JOIN shelter AS she INNER JOIN "
    var maxSelect = "(SELECT shelter_idx,MAX(send_time) AS recent_send_time FROM chat_user_shelter WHERE user_idx=? group by shelter_idx) AS maxCus "
    var on = "ON cus.shelter_idx = she.idx AND maxCus.recent_send_time = cus.send_time "
    var where = "WHERE cus.user_idx = ? "
    var groupBy = "GROUP BY cus.shelter_idx ORDER BY shelter_idx "
    poolAdapter.execute(select + from + maxSelect + on + where + groupBy, [_data.user_idx, _data.user_idx], function (_results) {
        _callback(_results);
    });
};

exports.updateChatNotRead = function (_data, _callback) {
    var update = "UPDATE chat_user_shelter SET read_state=1 WHERE shelter_idx=? AND type=1"
    poolAdapter.execute(update, [_data.shelter_idx], function () {

    });
}