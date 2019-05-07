var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/mapTest',function(_req,_res){
    var addr = '서울 종로구 경교장1길 7-1';
    request({
        uri: encodeURI('https://dapi.kakao.com/v2/local/search/address.json?query=' + addr),
        method: "GET",
        headers: { 'Authorization': 'KakaoAK 7a116decd0d85fb13328c9f516f7baaa'},
    }, function(error, response, body) {
        if(error)
            console.log(error);
        else {
            console.log(JSON.parse(body));
            _res.send(JSON.parse(body));
        }
    });
});

module.exports = router;