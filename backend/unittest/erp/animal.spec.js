const assert = require('assert');

describe.only("permitDiscoverRequest Test", function () {
    var discover = require('../../model/erp/animal');
    it("result is 1", function (done) {
        discover.permitDiscoverRequest(
            { idx: 10 }
            , function (_result) {
                assert.equal(_result.result, 1);
                done();
            });
    });
});
