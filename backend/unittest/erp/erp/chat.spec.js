const assert = require('assert');
var chat = require('../../../model/erp/chat');
describe("getChatList Test", function () {
    it("get list", function (done) {
        chat.getChatList(
            {
                shelter_idx: 1
            }
            , function () { }, function (_chatList, _chatNewList) {
                console.log(_chatList);
                console.log(_chatNewList)
                assert(_chatList);
                assert(_chatNewList)
                done();
            });
    });
    it("result list", function (done) {
        chat.getChatList(
            {
                shelter_idx: 1
            }
            , function (_result) {
                console.log(_result)
                assert(_result)
                done()
            }, function () { });
    });
});

describe.only("getShelter Test", function () {
    it("get data", function (done) {
        chat.getShelter(
            {
                shelter_idx: 1
            }
            , function () { }, function (_shelter) {
                console.log(_shelter);
                assert(_shelter);
                done();
            });
    });

    it("result", function (done) {
        chat.getShelter(
            {
                shelter_idx: 1,
            }
            , function (_result) {
                console.log(_result)
                assert.equal(_result.result, 1);
                done();
            });
    });
});

describe("getChat Test", function () {
    it("get list", function (done) {
        chat.getChat(
            {
                shelter_idx: 1,
                user_idx: 4
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
                user_idx: 4
            }
            , function (_result) {
                console.log(_result)
                assert.equal(_result.result, 1);
                done();
            });
    });
});
