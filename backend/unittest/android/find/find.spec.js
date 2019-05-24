const assert = require('assert');

describe("registerFind Test", function () {
    var find = require('../../../model/android/find/find');
    it("insert result not undefined", function (done) {
        find.registerFind({},
            {
                user_idx: 1,
                lost_datetime: "2019-5-28"
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

describe.only("getFind Test", function () {
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