const assert = require('assert');

describe.only("findAnimal Test", function () {
    var findAnimal = require('../../../model/android/discoverFind/findAnimal');
    it("getList Test", function (done) {
        findAnimal.findAnimal({
            start_date: "2018-5-20",
            end_date: "2019-6-20",
            latitude: "37.56611",
            longitude: "126.98247",
            species_code: "1",
            sex: "w",
            distance: "100"
        }, function () { }, function (_animals, _discovers) {
            console.log(_animals)
            console.log(_discovers)

            assert(_animals);
            assert(_discovers);
            done();
        });
    });

    it("result Test", function (done) {
        findAnimal.findAnimal({
            start_date: "2018-5-20",
            end_date: "2019-6-20",
            latitude: "37.56611",
            longitude: "126.98247",
            species_code: "1",
            sex: "w",
            distance: "100"
        }, function (_result) {
            console.log(_result.list)
            assert(_result.list)
            done();
        }, function () {
        });
    });
});
