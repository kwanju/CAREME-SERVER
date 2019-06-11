var poolAdapter = require('../poolAdapter'); // get poolAdapter

exports.addAdoptAnimal = function (_data, _callback) {
    var query = "INSERT INTO " +
        "adopt(" +
        "animal_idx, user_idx, datetime, user_name, address, address2, phone_number, user_email, " +
        "q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, " +
        "q20, q21, q22, q23, q24) "
        + "VALUES (?,?,?,?,?,?,?,?," + //8개
        "?,?,?,?,?,?,?,?,?,?," + //q1~10개
        "?,?,?,?,?,?,?,?,?,?," + //q11~20
        "?,?,?,?" + ")"; //q21~24

    var date = require('../../utils/date')();

    poolAdapter.execute(query, [ //userIdx는 router에서 정의해줘야함
        _data.animalIdx, _data.user_idx, date, _data.adoptName, _data.position, _data.position2,
        _data.adoptPhoneNumber, _data.adoptEmail,
        //q1~q24
        _data.adoptRelation, _data.adoptHouse, _data.adoptAnimalPlace, _data.adoptBack, _data.adoptIdNumber,
        _data.adoptJob, _data.adoptSocialId, _data.adoptPlaceType, _data.adoptFamily, _data.adoptResponsible,
        _data.adoptMeanDog, _data.adoptPurpose1, _data.adoptPurpose2, _data.adoptExperience, _data.adoptWithAnimal,
        _data.adoptNumberDog, _data.adoptSendDog, _data.adoptBenefitDog, _data.adoptCarePay, _data.adoptVisitPurpose,
        _data.adoptPreditFee, _data.adoptLifeDog, _data.adoptEmptyDog, _data.adoptSign
    ],
        function (_results) {
            _callback();
        });
}

exports.setAdoptState = function (_data, _callback) {
    var update = "UPDATE animal SET state=2 ";
    var where = "WHERE idx=?";
    poolAdapter.execute(update + where, [_data.animalIdx], function (_results) {
        _callback();
    });
};

exports.userLogin = function (_data, _callback) {
    var select = "SELECT idx,id from user "
    var where = "WHERE id=? AND pw=?"
    poolAdapter.execute(select + where, [_data.id, _data.pw], function (_results) {
        _callback(_results);
    });
};

exports.getAdoptList = function (_data, _callback) {
    var select = "SELECT ad.*, an.name ";
    var join = "FROM adopt AS ad INNER JOIN animal AS an ";
    var on = "ON ad.animal_idx = an.idx "; //입양신청서의 animal_idx와 animal의 idx가 같은 것만
    var where = "WHERE an.shelter_idx = ? AND ad.permit=0"; // 결정 안된 입양신청만

    poolAdapter.execute(select + join + on + where, [_data.shelter_idx], function (_results) { //_data.idx = shelter idx
        _callback(_results);
    });
};

exports.getPermitAdoptList = function (_data, _callback) {
    var select = "SELECT ad.*, an.name ";
    var join = "FROM adopt AS ad INNER JOIN animal AS an ";
    var on = "ON ad.animal_idx = an.idx "; //입양신청서의 animal_idx와 animal의 idx가 같은 것만
    var where = "WHERE an.shelter_idx = ? AND ad.permit=1"; // 결정 된 입양신청만

    poolAdapter.execute(select + join + on + where, [_data.shelter_idx], function (_results) { //_data.idx = shelter idx
        _callback(_results);
    });
};

exports.getAdopt = function (_data, _callback) { // adopt idx를 받아서 adopt info 출력
    var select = "SELECT ad.*, an.name AS animalName, s.name AS shelterName ";
    var from = "FROM adopt AS ad INNER JOIN animal AS an INNER JOIN shelter AS s "; //animal이름 shelter이름
    var on = "ON ad.animal_idx = an.idx AND an.shelter_idx = s.idx ";
    var where = "WHERE ad.idx = ?";
    poolAdapter.execute(select + from + on + where, [_data.idx], function (_results) { //_data.idx = adopt idx
        _callback(_results);
    });
}

exports.permitAdopt = function (_data, _callback) {
    var update = "UPDATE adopt SET permit=1 ";
    var where = "WHERE idx=?";

    var update2 = "UPDATE animal INNER JOIN adopt ON animal.idx=adopt.animal_idx SET animal.state=3 ";
    var where2 = "WHERE adopt.idx=?";

    poolAdapter.execute(update + where, [_data.idx], function () { //adopt idx
        poolAdapter.execute(update2 + where2, [_data.idx], function () {
            _callback();
        })
    });
};

exports.rejectAdopt = function (_data, _callback) {
    var update = "UPDATE adopt SET permit=-1 ";
    var where = "WHERE idx=?";
    var update2 = "UPDATE animal INNER JOIN adopt ON animal.idx=adopt.animal_idx SET animal.state=1 ";
    var where2 = "WHERE adopt.idx=?";

    poolAdapter.execute(update + where, [_data.idx], function () { //adopt idx
        poolAdapter.execute(update2 + where2, [_data.idx], function () {
            _callback();
        })
    });
};

exports.checkAdoptReadState = function (_data, _callback) {
    var select = "SELECT ad.idx ";
    var from = "FROM adopt AS ad INNER JOIN animal AS ani "
    var on = "ON ad.animal_idx = ani.idx "
    var where = "WHERE read_state = 0 AND ani.shelter_idx=?";

    poolAdapter.execute(select + from + on + where, [_data.idx], function (_results) {
        _callback(_results);
    });
}

exports.updateAdoptNotRead = function (_data, _callback) {
    var update = "UPDATE adopt SET read_state=1 ";
    var where = "WHERE idx IN (?)"

    poolAdapter.execute(update + where, [_data], function () {
        _callback();
    });
}

exports.getPushData = function (_data, _callback) {
    var select = "SELECT  u.token, ani.name AS animalName, she.name AS shelterName "
    var from = "FROM adopt AS ad INNER JOIN user AS u INNER JOIN animal AS ani INNER JOIN shelter AS she "
    var on = "ON ad.user_idx = u.idx AND ad.animal_idx = ani.idx AND ani.shelter_idx = she.idx "
    var where = "WHERE ad.idx = ?"
    poolAdapter.execute(select + from + on + where, [_data.idx], function (_results) {
        _callback(_results[0]);
    });
}