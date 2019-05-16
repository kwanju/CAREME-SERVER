const assert = require('assert');

describe.only("GetDiscoverRecord Test", function () {
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

describe("registerDiscover Test", function () {
    var discover = require('../../../model/android/discover/discover');
    it("result is 1", function (done) {
        discover.registerDiscover({},
            {
                discover_datetime: "2019-5-12 12:30",
                discover_spot: "경기 안산",
                description: "ㅎ",
                species_code: "1",
                animal_sex: "W",
                user_idx: "1",
                longitude: "127.11837",
                latitude: "37.47720"
            },
            function (_result) {
                assert(_result);
                done();
            }
        );

    });
});