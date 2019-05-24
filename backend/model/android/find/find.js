var dbFacade = require('../../../DB/DBFacadeAndroid');


exports.registerFind = function (_req, _data, _callback, _testcallback) {
    if (_req.file) // 이미지 파일이 있을 때만 url_picture 설정
        _data.url_picture = _req.file.destination + _req.file.filename;
    dbFacade.registerFind(_data, function (_insertId) {
        var res = {}
        res.result = 1
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
