var dbFacade = require('../../DB/DBFacade');

exports.getChatList = function (_data, _callback, _testcallback) {
    dbFacade.getChatList(_data, function (_chatList) {
        dbFacade.getNewChatList(_data, function (_chatNewList) {
            if (typeof _testcallback == 'function')
                _testcallback(_chatList, _chatNewList);


            combine(_chatList, _chatNewList);
            sortBySendTime(_chatList);
            var res = {
                result: 1,
                list: _chatList
            }
            _callback(res);
        });
    });
};

exports.getChat = function (_data, _callback, _testcallback) {
    dbFacade.getChat(_data, function (_results) {
        if (typeof _testcallback == 'function')
            _testcallback(_results);

        var res = {
            result: 1,
            list: _results
        }
        _callback(res);
    });
}

var combine = function (_chatList, _chatNewList) {
    var j = 0;
    for (var i = 0; i < _chatNewList.length; i++) {
        var chatNew = _chatNewList[i];
        while (true) {
            var chat = _chatList[j];
            j++;
            if (chatNew.user_idx == chat.user_idx) {
                chat.count = chatNew.count;
                break;
            }
        }
    }
}

var sortBySendTime = function (_chatList) {
    _chatList.sort(function (a, b) {
        return a.recent_send_time - b.recent_send_time
    });
}