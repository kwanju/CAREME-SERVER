const assert = require('assert');

describe.only("getDiscoverFind Test", function () {
    var discoverFind = require('../../../model/android/discoverFind/discoverFind');
    it("getList Test", function (done) {
        discoverFind.getDiscoverFind({}, function () { }, function (_discover, _find) {
            assert.notEqual(_discover.length, 0)
            assert.notEqual(_find.length, 0)
            done();
        });
    });
    it("sort discover, find together", function (done) {
        discoverFind.getDiscoverFind({}, function (_res) {
            console.log(_res.list);
            console.log(_res.list.length);
            assert.notEqual(_res.list.length, 0);
            done();
        });
    });
});
