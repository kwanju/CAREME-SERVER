var dbFacade = require('../../DB/DBFacade');

exports.matching = function (_data, _callback) {
    var map = require('./map');

    map.getSortedShelter(_data, function (_shelters) { // shelter와 shelter 거리정보 가져옴

        //거절되면 다음 거 처리하는 부분 -- 나중에 구현
        dbFacade.getAllDiscoverRequestInDiscover({ discover_idx: _data.discover_idx }, function (_results) {
            var shelter = closestShelterInNew(_shelters, _results);
            //discover_request 요청
            dbFacade.createDiscoverRequest(
                {
                    discover_idx: _data.discover_idx,
                    shelter_idx: shelter.idx
                }, function (_result) {
                    _callback(_result);
                });
        });
    });
}

// 쉘터 중에서 안에 있는 이미 신청한 쉘터는 거르기.
function closestShelterInNew(_shelters, _results) {
    var shelter;
    for (var i = 0; i < _shelters.length; i++) {
        shelter = _shelters[i];
        if (!isShelterInResult(shelter, _results))
            break;
    }
    return shelter
}

function isShelterInResult(_shelter, _results) {
    for (var i = 0; i < _results.length; i++) {
        if (_shelter.idx == _results[i].shelter_idx)
            return true
    }
    return false
}