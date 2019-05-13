var dbFacade = require('../../DB/DBFacade');
var request = require('request');

var getShelterAddress = function (_data, _callback) {
    dbFacade.getShelterAddress(_data, function (_results) {
        var res = {};
        res.result = 1;
        res.shelter = _results;
        _callback(res);
    });
}

var bubbleSort = function (resultAry, resultAryLength, shelterAryObj) { //
    if(resultAryLength-1 === 0){
        resultAry[0] = shelterAryObj;
    }else {
        var tmp;
        for (var i = resultAryLength-1; i > -1; i--) {
            if(resultAry[i].distance < resultAry[i-1].distance){
                tmp = resultAry[i];
                resultAry[i] = resultAry[i-1];
                resultAry[i-1] = tmp;
            }
        }
    }
    return resultAry;
}
var getDistanceFromLatLonInKm = function (lat1,lng1,lat2,lng2) {//y1 x1 y2 x2
    function deg2rad(deg) {
        return deg * (Math.PI/180)
    }

    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lng2-lng1);
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    return d;
}

exports.getSortedShelter = function (_body,callback) {
    //var addr = '서울 종로구 경교장1길 7-1'; //주소는 DB에서 받아오고, req는 앱 사용자의 좌표값\
    var testX = 150;
    var testY = 30;
    var shelterAry = new Array();
    var resultAry = new Array();
    var count=0;

    var counter = 0;
    getShelterAddress(_body,function(_result){
        for (var i = 0; i < _result.shelter.length; i++) {
            shelterAry[i] = {
                position: _result.shelter[i].position,
                idx: _result.shelter[i].idx,
                distance: 0.001,
            };
        }
        for (var j = 0; j < _result.shelter.length; j++) {
            getLocation(shelterAry[count].position, function (error, response, body) {
                if (error) {
                    console.log(error);
                }
                else {
                    if (response) {
                        //앱에서 받아온 좌표값과 첫 번째[0] 검색 결과의 좌표값과 비교
                        var x = JSON.parse(body).documents[0].x;
                        var y = JSON.parse(body).documents[0].y;
                        shelterAry[count].distance = getDistanceFromLatLonInKm(testY, testX, y, x); //count == j
                        // -> resultAry랑 bubble sort 후 삽입
                        //console.log("shelterAry : " + JSON.stringify(shelterAry[count]));
                        resultAry = bubbleSort(resultAry, shelterAry.length, shelterAry[count]);
                        count++;counter++;
                        if(counter === _result.shelter.length){
                            //console.log("result: "+JSON.stringify(resultAry));
                            callback(JSON.parse(JSON.stringify(resultAry)));
                        }
                    }
                }
            });
        }
    });
};

var getLocation = function(position,_callback){
    request({
        uri: encodeURI('https://dapi.kakao.com/v2/local/search/address.json?query=' + position),
        method: "GET",
        headers: {'Authorization': 'KakaoAK 7a116decd0d85fb13328c9f516f7baaa'}, //카카오 key
    }, function (error, response, body) {
        _callback(error,response,body)
    });
};

exports.getLocation = getLocation;

