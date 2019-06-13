// test :  .\unittest\android\discover\discover.spec.js

var dbFacade = require('../../../DB/DBFacadeAndroid');
var config = require('../../../config').fcm;
exports.registerDiscover = function (_req, _data, _callback) {
    if (_req.file) // 이미지 파일이 있을 때만 url_picture 설정
        _req.body.url_picture = _req.file.destination + _req.file.filename;

    var find = require('../find/find');
    var matching = require('../../discover/matching');
    dbFacade.registerDiscover(_data, function (_idx) {
        var res = {};
        res.result = 1;
        res.idx = _idx;
        _callback(res);

        matching.matching(
            {
                longitude: _data.longitude,
                latitude: _data.latitude,
                discover_idx: _idx,
                latitude: _data.latitude,
                longitude: _data.longitude
            }, function () {

            }
        );

        find.matchingFind({
            mode: config.mode.DISCOVERFIND,
            idx: _idx,
            date: new Date(_data.discover_datetime),
            latitude: _data.latitude,
            longitude: _data.longitude,
            species_code: _data.species_code,
            sex: _data.animal_sex
        }, function () { })
    });
};

exports.getDiscoverRecord = function (_data, _callback) {
    dbFacade.getDiscoverRecord(_data, function (_results) {
        var res = {};
        res.result = 1;
        res.list = _results;
        _callback(res);
    });
};

exports.getDiscover = function (_data, _callback, _testcallback) {
    dbFacade.getDiscover(_data, function (_results) {
        if (typeof _testcallback == 'function')
            _testcallback(_results);
        var res = {};
        res.result = 1;
        res.discover = _results[0];
        _callback(res);
    });
};