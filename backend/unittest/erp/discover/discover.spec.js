const assert = require('assert');

describe.only("permitDiscoverRequest Test", function () {
    var discover = require('../../../model/erp/discover');
    it("result is 1", function (done) {
        discover.permitDiscoverRequest(
            { idx: 10 }
            , function (_result) {
                assert.equal(_result.result, 1);
                done();
            });
    });
});

describe("rejectDiscoverRequest Test", function () {
    var discover = require('../../../model/erp/discover');
    it("insert discover_request table Test", function (done) {
        discover.rejectDiscoverRequest(
            { idx: "21" }, function () { }
            , function (_result) {
                assert(_result.insertId);
                done();
            });
    });
});