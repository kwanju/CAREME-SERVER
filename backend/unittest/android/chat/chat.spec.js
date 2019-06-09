const assert = require('assert');
var chat = require('../../../model/android/chat/chat');

describe("getChat Test", function () {
    it("get list", function (done) {
        chat.getChat(
            {
                shelter_idx: 1,
                user_idx: 1
            }
            , function () { }, function (_chatList) {
                console.log(_chatList);
                assert(_chatList);
                done();
            });
    });

    it("result", function (done) {
        chat.getChat(
            {
                shelter_idx: 1,
                user_idx: 1
            }
            , function (_result) {
                console.log(_result)
                assert.equal(_result.result, 1);
                done();
            });
    });
});

describe.only("getChatList Test", function () {
    it("getChatList list", function (done) {
        chat.getChatList(
            {
                user_idx: 1
            }
            , function () { }, function (_chatList, _newChatList) {
                console.log(_chatList);
                console.log(_newChatList)
                assert(_chatList);
                assert(_newChatList)
                done();
            });
    });
    it("results", function (done) {
        chat.getChatList(
            {
                user_idx: 1
            }
            , function (_result) {
                console.log(_result.list);
                assert(_result)
                done()
             });
    });
});
