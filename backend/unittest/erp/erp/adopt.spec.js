const assert = require('assert');

describe("permitDiscoverRequest Test", function () {
    var adopt = require('../../../model/erp/adopt');
    it("result is 1", function (done) {
        adopt.userLogin(
            {
                id: "test",
                pw: "test"
            }
            , function (_result) {
                assert.equal(_result.result, 1);
                assert.equal(_result.user.idx, 1);
                assert.equal(_result.user.id, "test");
                done();
            });
    });
    it("result is 0", function (done) {
        adopt.userLogin(
            {
                id: "test",
                pw: "test1"
            }
            , function (_result) {
                assert.equal(_result.result, 0);
                done();
            });
    });
});

describe.only("permitDiscoverRequest Test", function () {
    var adopt = require('../../../model/erp/adopt');
    it("fcm test", function (done) {
        adopt.permitAdopt(
            {
                idx: "3"
            }
            , function () { }, function (_push) {
                console.log(_push)
                assert(_push)
                done();
            });
    });
});
