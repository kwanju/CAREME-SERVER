var dbFacadeErp = require('../../../DB/DBFacade');
var dbFacadeAndroid = require('../../../DB/DBFacadeAndroid');

exports.getChat = function (_data, _callback, _testcallback) {
    dbFacadeErp.getChat(_data, function (_results) {
        if (typeof _testcallback == 'function')
            _testcallback(_results);

        var res = {
            result: 1,
            list: _results
        }
        _callback(res);
    });
}

exports.getChatList = function (_data, _callback, _testcallback) {
    dbFacadeAndroid.getChatList(_data, function (_chatList) {
        dbFacadeAndroid.getNewChatList(_data, function (_newChatList) {
            if (typeof _testcallback == 'function')
                _testcallback(_chatList, _newChatList);

            combine(_chatList, _newChatList);
            sortBySendTime(_chatList);

            for (var i = 0; i < _chatList.length; i++)
                if (_chatList[i].count == undefined)
                    _chatList[i].count = 0
            
            var res = {
                result: 1,
                list: _chatList
            }

            _callback(res);
        });
    });
}

var combine = function (_chatList, _chatNewList) {
    var j = 0;
    for (var i = 0; i < _chatNewList.length; i++) {
        var chatNew = _chatNewList[i];
        while (true) {
            var chat = _chatList[j];
            j++;
            if (chatNew.shelter_idx == chat.shelter_idx) {
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