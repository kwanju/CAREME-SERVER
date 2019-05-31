const assert = require('assert');

describe("registerFind Test", function () {
    var favorite = require('../../../model/android/user/favorite');
    it("insert result not undefined", function (done) {
        favorite.getFavoriteInfoList(
            {
                animal_idx: [83, 84, 85, 86]
            }
            , function () { }, function (_result) {
                console.log(_result);
                assert(_result);
                done();
            });
    });

});
