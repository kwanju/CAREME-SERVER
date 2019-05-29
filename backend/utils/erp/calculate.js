exports.calculateLatLong = function (_lat, _long, _distance) {
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
};