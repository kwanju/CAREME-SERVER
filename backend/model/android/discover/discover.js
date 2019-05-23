// test :  .\unittest\android\discover\discover.spec.js

var dbFacade = require('../../../DB/DBFacadeAndroid');

exports.registerDiscover = function (_req, _data, _callback) {
    if (_req.file) // 이미지 파일이 있을 때만 url_picture 설정
        _req.body.url_picture = _req.file.destination + _req.file.filename;

    var matching = require('../../discover/matching');
    dbFacade.registerDiscover(_data, function (_idx) {
        var res = {};
        res.result = 1;
        _callback(res);

        matching.matching(
            {
                longitude: _data.longitude,
                latitude: _data.latitude,
                discover_idx: _idx
            }, function () {

            }
        );
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