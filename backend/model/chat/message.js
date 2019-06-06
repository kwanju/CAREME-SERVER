var dbFacade = require('../../DB/DBFacade');


exports.saveMessage = function (_data, _callback, _testcallback) {
    dbFacade.saveMessage(_data, function (_idx) {
        if (typeof _testcallback == 'function')
            _testcallback(_idx);
        _callback(_idx);
    });
}

exports.ackMessage = function (_data, _callback) {
    dbFacade.ackMessage(_data, function () {
        _callback();
    });
}

exports.getPushInfoInChat = function (_data, _callback, _testcallback) {
    dbFacade.getPushInfoInChat(_data, function (_push) {
        if (typeof _testcallback == 'function')
            _testcallback(_push[0]);
        _callback(_push[0]);
    });
}