const assert = require('assert');

describe("getInfo Test", function () {
    var info = require('../../../model/android/user/info');
    it("insert result not undefined", function (done) {
        info.getInfo(
            {
                user_idx : 1
            }
            , function () { }, function (_result) {
                console.log(_result);
                assert(_result);
                done();
            });
    });

});
