const assert = require('assert');
var message = require('../../model/chat/message');

describe("saveMessage Test", function () {
    it("insert chat table test", function (done) {
        message.saveMessage(
            {
                type: "0",
                user_idx: "7",
                shelter_idx: "1",
                message: "반갑습니다."
            }
            , function () { }, function (_idx) {
                assert(_idx);
                done();
            });
    });
});

describe("ackMessage Test", function () {
    it("insert chat table test", function (done) {
        message.ackMessage(
            {
                message_idx: "85"
            }
            , function () { done(); }, function () {

            });
    });
});

describe.only("getPushInfoInChat Test", function () {
    it("get data", function (done) {
        message.getPushInfoInChat(
            {
                idx: 84
            }
            , function () { }, function (_push) {
                console.log(_push)
                assert(_push);
                done();
            });
    });
});