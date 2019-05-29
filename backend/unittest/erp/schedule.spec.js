const assert = require('assert');

describe.only("getVolunteerInCalendar Test", function () {
    var schedule = require('../../model/erp/schedule');
    it("데이터베이스에서 잘 가져오냐", function (done) {
        schedule.getVolunteerInCalendar(
            {
                shelter_idx: 1
            }
            , function (_result) {

            }, function (_data) {
                console.log(_data)
                assert(_data)
                done();
            });
    });

    it("결과값 제대로 출력?", function (done) {
        schedule.getVolunteerInCalendar(
            {
                shelter_idx: 1
            }
            , function (_result) {
                assert.equal(_result.result,1)
                done();
            });
    });
});
