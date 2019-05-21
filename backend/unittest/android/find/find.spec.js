const assert = require('assert');

describe.only("registerFind Test", function () {
    var find = require('../../../model/android/find/find');
    it("insert result not undefined", function (done) {
        find.registerFind({},
            {
                user_idx: 1
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
                user_idx: 1
            }
            , function (_res) {
                assert.equal(_res.result, 1);
                done();
            }, function () { });
    })
});