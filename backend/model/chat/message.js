var dbFacade = require('../../DB/DBFacade');


exports.saveMessage = function (_data, _callback, _testcallback) {
    dbFacade.saveMessage(_data, function (_idx) {
        if (typeof _testcallback == 'function')
            _testcallback(_idx);
            _callback();
    });
}