var dbFacade = require('../../DB/DBFacade');

exports.matching = function (_data, _callback) {
    const DISTANCE = 20 // 몇 km미터 이내의 지역까지 추천을 허용해줄지
    var map = require('./map');
    var latlong = require('../../utils/erp/calculate').calculateLatLong(_data.latitude, _data.longitude, DISTANCE)
    _data.start_latitude = latlong.lat[0]
    _data.end_latitude = latlong.lat[1]
    _data.start_longitude = latlong.long[0]
    _data.end_longitude = latlong.long[1]
    map.getSortedShelter(_data, function (_shelters) { // shelter와 shelter 거리정보 가져옴
        console.log(_shelters);
        //거절되면 다음 거 처리하는 부분 -- 나중에 구현
        dbFacade.getAllDiscoverRequestInDiscover({ discover_idx: _data.discover_idx }, function (_results) {
            var shelter = closestShelterInNew(_shelters, _results);
            //discover_request 요청
            if (shelter == undefined)
                return;
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