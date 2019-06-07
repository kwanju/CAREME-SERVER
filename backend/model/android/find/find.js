var dbFacade = require('../../../DB/DBFacadeAndroid');
var config = require('../../../config').fcm;

exports.registerFind = function (_req, _data, _callback, _testcallback) {
    if (_req.file) // 이미지 파일이 있을 때만 url_picture 설정
        _data.url_picture = _req.file.destination + _req.file.filename;
    dbFacade.registerFind(_data, function (_insertId) {
        var res = {}
        res.result = 1
        res.idx = _insertId;
        _callback(res);
        if (typeof _testcallback == 'function')
            _testcallback(_insertId);
    });
}

exports.getFind = function (_data, _callback, _testcallback) {
    dbFacade.getFind(_data, function (_results) {
        if (typeof _testcallback == 'function')
            _testcallback(_results);
        var res = {};
        res.result = 1;
        res.find = _results[0];
        _callback(res);
    });
}

exports.matchingFind = function (_data, _callback, _testcallback) {
    const DISTANCE = 10 // 몇 km미터 이내의 지역까지 추천을 허용해줄지
    const MONTH = 1 // 몇 달 내외의 기간까지 추천을 허용해줄지

    var latlong = require('../../../utils/erp/calculate').calculateLatLong(_data.latitude, _data.longitude, DISTANCE)

    _data.date.setMonth(_data.date.getMonth() - MONTH)
    var start_date = new Date(_data.date);

    _data.date.setMonth(_data.date.getMonth() + MONTH + 1)
    var end_date = new Date(_data.date)

    var data = {
        start_latitude: latlong.lat[0],
        end_latitude: latlong.lat[1],
        start_longitude: latlong.long[0],
        end_longitude: latlong.long[1],
        start_date: start_date,
        end_date: end_date,
        species_code: _data.species_code,
        sex: _data.sex
    }

    var fcm = require('../../../utils/android/fcm');

    dbFacade.matchingFind(data, function (_results) {
        if (typeof _testcallback == 'function')
            _testcallback(_results);
        for (var i = 0; i < _results.length; i++)
            fcm.send(_results[i].token, "찾아요에 올린 유기동물과 비슷할 가능성이 있는 유기동물이 발견되었습니다.",_data.mode,{
                idx : _data.idx,
                message : "찾아요에 올린 유기동물과 비슷할 가능성이 있는 유기동물이 발견되었습니다."
            });
    });
}

