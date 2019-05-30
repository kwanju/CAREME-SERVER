const assert = require('assert');

describe.only("permitDiscoverRequest Test", function () {
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
