
var dbfacade = require('../DB/DBFacade');



exports.checkDupId = function (_id, _callback) {
    dbfacade.checkDupId(_id, _callback)
}

exports.registration = function (_data, _callback) {
    var map = require('../model/discover/map');
    dbfacade.registration(_data, function () {
        _callback();

        //등록된 보호소 좌표 등록
        map.getLocation(_data.position1, function (error, response, body) {
            if (error)
                console.log(error);
            if (response) {
                var body = JSON.parse(body)
                var longitude = body.documents[0].x;
                var latitude = body.documents[0].y;
                dbfacade.registerLocation({
                    longitude: longitude,
                    latitude: latitude,
                    id: _data.id
                }, function () {
                });
            }
        });
    });

}

exports.addAnimal = function (_data, _callback) {
    animal.addAnimal(_data, _callback);
}

exports.deleteAnimal = function (_data, _callback) {
    animal.deleteAnimal(_data, _callback);
}

exports.getAnimalList = function (_data, _callback) {
    animal.getAnimalList(_data, _callback);
}

exports.checkReadState = function (_data, _callback) {
    dbfacade.checkReadState(_data, _callback);
}