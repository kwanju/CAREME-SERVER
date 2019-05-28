var dbFacade = require('../../../DB/DBFacadeAndroid');


exports.findAnimal = function (_data, _callback, _testcallback) {

    var latlong = calculateLatLong(_data.latitude, _data.longitude, _data.distance)

    var data = {
        start_latitude: latlong.lat[0],
        end_latitude: latlong.lat[1],
        start_longitude: latlong.long[0],
        end_longitude: latlong.long[1],
        start_date: _data.start_date,
        end_date: _data.end_date,
        species_code: _data.species_code,
        sex: _data.sex
    };
    var res = {};
    res.list = [];
    res.result = 1;


    dbFacade.getAnimalListByFindAnimal(data, function (_animals) {
        dbFacade.getDiscoverListByFindAnimal(data, function (_discovers) {
            if (typeof _testcallback == "function")
                _testcallback(_animals, _discovers);
            sortAnimalDiscoverByDiscoveredDateTime(res.list, _discovers, _animals);
            _callback(res);
        });
    });
}

var sortAnimalDiscoverByDiscoveredDateTime = function (_list, _discovers, _animals) {
    var length = _discovers.length + _animals.length;
    var d = 0;
    var f = 0;

    for (var i = 0; i < length; i++) {

        if (f == _animals.length) {
            var discover = _discovers[d]
            discover.code = 0;
            _list.push(discover)
            d++
            continue;
        } else if (d == _discovers.length) {
            var animal = _animals[f];
            animal.code = 1;
            _list.push(animal)
            f++
            continue;
        }

        var discover = _discovers[d]
        var animal = _animals[f];

        if (discover.discover_datetime > animal.discover_datetime) {
            discover.code = 0;
            _list.push(discover)
            d++
        } else {
            animal.code = 1;
            _list.push(animal);
            f++
        }
    }
}


function calculateLatLong(_lat, _long, _distance) {
    var lat = [0, 0];
    var long = [0, 0]

    lat[0] = String(parseFloat(_lat) - _distance / 111).substring(0, 8)
    lat[1] = String(parseFloat(_lat) + _distance / 111).substring(0, 8)

    long[0] = String(parseFloat(_long) - _distance / 91.17).substring(0, 9)
    long[1] = String(parseFloat(_long) + _distance / 91.17).substring(0, 9)

    return {
        lat: lat,
        long: long
    }
}