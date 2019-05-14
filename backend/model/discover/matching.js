var dbFacade = require('../../DB/DBFacade');

exports.matching = function (_data, _callback) {
    var map = require('./map');

    map.getSortedShelter(_data, function (_shelters) { // shelter와 shelter 거리정보 가져옴

        //거절되면 다음 거 처리하는 부분 -- 나중에 구현
        /*dbFacade.getAllDiscoverRequestInDiscover({ discover_idx: _data.discover_idx }, function (_results) {
            for (var i = 0; i < _shelters.length; i++) {
                var shelter = _shelters[i];
                if (isShelterInResult(shelter, _results))
                    continue
                
            }
        });*/
        var shelter = _shelters[0]

        //discover_request 테이블 생성
        dbFacade.createDiscoverRequest(
            {
                discover_idx: _data.discover_idx,
                shelter_idx: shelter.idx
            },
            function () {
            }
        );
    });
}

function isShelterInResult(_shelter, _results) {
    for (var i = 0; i < _results.length; i++) {
        if (_shelter.idx == _results[i].shelter_idx)
            return true
    }
    return false
}