var dbFacade = require('../../DB/DBFacade');

exports.getShelter = function (_data, _callback) {
    dbFacade.getShelter(_data, function (_results) {
        var res = {};
        res.result = 1;
        res.shelter = _results[0];
        _callback(res);
    });
}

exports.updateShelter = function (_req, _data, _callback) {
    if (_req.file) // 이미지 파일이 있을 때만 url_picture 설정
        _req.body.url_picture = _req.file.destination + _req.file.filename;

    var idx = _data.idx;
    delete _data.idx;
    dbFacade.updateShelter(_data, idx, function () {
        var res = {};
        res.result = 1;
        _callback(res);
    });
}
