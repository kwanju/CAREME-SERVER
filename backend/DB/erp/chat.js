var poolAdapter = require('../poolAdapter'); // get poolAdapter

exports.getNewChatList = function (_data, _callback) {
    var select = "SELECT * FROM "
    poolAdapter.execute(sql+where+typeCondition+like, [_data.idx], function (_results) {
        _callback(_results);
    });
}