var dbFacade = require('../../DB/DBFacade');
exports.addAnimal = function (_req, _data, _callback) {

    _req.body.shelter_idx = _req.session.user.idx; // 보호소 idx 설정.

    if (_req.file) // 이미지 파일이 있을 때만 url_picture 설정
        _req.body.url_picture = _req.file.destination + _req.file.filename;

    dbFacade.addAnimal(_data, function () {
        var res = { result: 1 };
        _callback(res);
    });
};