var dbFacade = require('../../../DB/DBFacadeAndroid');


exports.getDiscoverFind = function (_data, _callback, _testcallback) {
    var res = {};
    res.list = [];
    res.result = 1;
    dbFacade.getDiscoverInBulletinBoard(_data, function (_discover) {
        dbFacade.getFindInBulletinBoard(_data, function (_find) {
            if (typeof _testcallback == "function")
                _testcallback(_discover, _find);

            sortDiscoverFindByDate(res.list, _discover, _find);
            _callback(res);
        });
    });
}


var sortDiscoverFindByDate = function (_list, _discovers, _finds) {
    var length = _discovers.length + _finds.length;
    var d = 0;
    var f = 0;

    for (var i = 0; i < length; i++) {

        if (f == _finds.length) {
            var discover = _discovers[d]
            discover.code = 0;
            _list.push(discover)
            d++
            continue;
        } else if (d == _discovers.length) {
            var find = _finds[f];
            find.code = 1;
            _list.push(find)
            f++
            continue;
        }

        var discover = _discovers[d]
        var find = _finds[f];

        if (discover.discover_datetime > find.lost_datetime) {
            discover.code = 0;
            _list.push(discover)
            d++
        } else {
            find.code = 1;
            _list.push(find);
            f++
        }
    }
}
