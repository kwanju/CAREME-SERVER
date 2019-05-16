const assert = require('assert');

describe.only("matching Test", function () {
    var matching = require('../../model/discover/matching');
    it("insert discover_request table test", function (done) {
        matching.matching(
            {
                discover_idx: 21,
                longitude: 127.11837,
                latitude: 37.47720
            }
            , function (_result) {
                assert(_result.insertId);
                done();
            });
    });
});