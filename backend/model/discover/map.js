var dbFacade = require('../../DB/DBFacade');
var request = require('request');

var distanceSort = function (a, b) {
    return a.distance - b.distance;
}
var getDistanceFromLatLonInKm = function (lat1, lng1, lat2, lng2) {//y1 x1 y2 x2

    if (lat1 == null || lat2 == null)
        return 1000000

    function deg2rad(deg) {
        return deg * (Math.PI / 180)
    }

    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1);  // deg2rad below
    var dLon = deg2rad(lng2 - lng1);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
}

exports.getSortedShelter = function (_location, callback) {
    //var addr = '서울 종로구 경교장1길 7-1'; //주소는 DB에서 받아오고, req는 앱 사용자의 좌표값\
    var shelterAry = new Array();

    dbFacade.getAllShelterLocation(function (_result) {
        for (var i = 0; i < _result.length; i++) {
            shelterAry.push({
                idx: _result[i].idx,
                distance: getDistanceFromLatLonInKm(_result[i].longitude, _result[i].latitude, _location.longitude, _location.latitude)
            });
        }
        shelterAry.sort(distanceSort);
        callback(JSON.parse(JSON.stringify(shelterAry)));
    });
};

var getLocation = function (position, _callback) {
    request({
        uri: encodeURI('https://dapi.kakao.com/v2/local/search/address.json?query=' + position),
        method: "GET",
        headers: { 'Authorization': 'KakaoAK 7a116decd0d85fb13328c9f516f7baaa' }, //카카오 key
    }, function (error, response, body) {
        _callback(error, response, body)
    });
};

exports.getLocation = getLocation;

