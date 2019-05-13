var express = require('express');

var router = express.Router();

router.post('/mapTest',function(_req,_res){//_req 으로 discover의 좌표를 받아와야함
    var uc = require('../../model/discover/map');
    uc.getSortedShelter(_req.body,function(_result){
        _res.send(_result);
    }) //res: 거리비례로 sort 된 shelter 객체 array 가져옴
});

router.post('/getDiscoverLocation', function (_req, _res) { //_req.body.idx = discover.idx

})//_res: discover 좌표 받아오기

router.post('/createDiscoverRequest', function (_req, _res) { //_req.body : 해당되는 discover & shelter 하나씩 가지고있는 객체

})//_res : INSERT 결과

router.post('/checkDiscoverRequest', function (_req, _res) {

})

module.exports = router;