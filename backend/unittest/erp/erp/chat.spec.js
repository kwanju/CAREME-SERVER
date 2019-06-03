const assert = require('assert');

describe.only("getChatList Test", function () {
    var chat = require('../../../model/erp/chat');
    it("get list", function (done) {
        chat.getNewChatList(
            {
                shelter_idx: 1
            }
            , function () { }, function (_result) {
                assert(_result);
                done();
            });
    });
});
