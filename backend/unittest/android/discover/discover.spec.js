const assert = require('assert');

describe("GetDiscoverRecord Test", function () {
    var discover = require('../../../model/android/discover/discover');
    it("result is 1", function (done) {
        var list = discover.getDiscoverRecord(
            { user_idx: "5" }, function (_result) {
                assert.equal(_result.result, 1);
                done();
            }
        );

    });
});