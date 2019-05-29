const assert = require('assert');

describe("registerFind Test", function () {
    var find = require('../../../model/android/find/find');
    it("insert result not undefined", function (done) {
        find.registerFind({},
            {
                user_idx: 1,
                lost_datetime: "2019-5-29",
                latitude: "37.56711",
                longitude: "126.98247",
                animal_sex: "w",
                species_code: '1'
            }
            , function () { }, function (_insertId) {
                console.log("Idx : " + _insertId);
                assert(_insertId);
                done();
            });
    });
    it("result is 1", function (done) {
        find.registerFind({},
            {
                user_idx: 20,
                lost_datetime: "2019-5-29"
            }
            , function (_res) {
                assert.equal(_res.result, 1);
                done();
            }, function () { });
    })
});

describe("getFind Test", function () {
    var find = require('../../../model/android/find/find');
    it("result from db is not undefined", function (done) {
        find.getFind(
            {
                idx: 20,
            }
            , function () { }, function (_result) {
                console.log(_result);
                assert(_result)
                done();
            });
    });
    it("result is 1", function (done) {
        find.getFind(
            {
                idx: 1,
            }
            , function (_res) {
                assert.equal(_res.result, 1);
                done();
            }, function () { });
    })
});

describe.only("matchingFind Test", function () {
    var find = require('../../../model/android/find/find');
    it("매칭된 Find DB 가져오기", function (done) {
        find.matchingFind(
            {
                date: new Date(2019, 4, 12),
                latitude: "37.56611",
                longitude: "126.98247",
                species_code: "1",
                sex: "w"
            }
            , function () { }, function (_result) {
                console.log(_result);
                assert(_result)
                done();
            });
    });
});