var dbFacade = require('../../../DB/DBFacade');

exports.searchShelterCategory = function(_data,_callback){
    dbFacade.searchShelterCategory(_data,function(_results){
        /**
         * 
         * JSON 형식         * 
         * {
         *  result = 1,
         *  list = [
         *     보호소 목록
         *  ]
         * }
         */
        var res = {}; 
        res.result = 1; // 성공적임을 보냄
        res.list = _results; // 

        _callback(res);
    })
}