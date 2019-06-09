const assert = require('assert');
var adopt = require('../../../model/android/adopt/adopt');

describe.only("getAdoptList Test", function () {
    it("get list", function (done) {
        adopt.getAdoptList(
            {
                user_idx: 1
            }
            , function () { }, function (_adoptList) {
                console.log(_adoptList);
                assert(_adoptList);
                done();
            });
    });
});
