var dbFacade = require('../../../DB/DBFacadeAndroid');

exports.registerDiscover = function (_req,_data, _callback) {
    if (_req.file) // 이미지 파일이 있을 때만 url_picture 설정
        _req.body.url_picture = _req.file.destination + _req.file.filename;

    dbFacade.registerDiscover(_data, function () {
        var res = {};
        res.result = 1;
        _callback(res);
    });
};