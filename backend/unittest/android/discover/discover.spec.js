const assert = require('assert');

describe("getDiscover Test", function () {
    var discover = require('../../../model/android/discover/discover');
    var data = {
        idx: "25"
    };
    it("Get data from db", function (done) {
        discover.getDiscover(
            data, function () { },
            function (_test) {
                console.log(_test);
                assert(_test);
                done();
            }
        );

    });

    it("Result is 1", function (done) {
        discover.getDiscover(data, function (_result) {
            assert.equal(_result.result, 1);
            done();
        });
    });
});

describe("GetDiscoverRecord Test", function () {
    var discover = require('../../../model/android/discover/discover');
    it("result is 1", function (done) {
        discover.getDiscoverRecord(
            { user_idx: "1" }, function (_result) {
                console.log(_result);
                assert.equal(_result.list.length, 23);
                done();
            }
        );

    });
});

describe.only("registerDiscover Test", function () {
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