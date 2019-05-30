var poolAdapter = require('../poolAdapter'); // get poolAdapter

exports.addAdopt = function (_data, _callback) {
    var query = "INSERT INTO " +
        "adopt(" +
        "animal_idx, user_idx, datetime, user_name, address, address2, phone_number, user_email, "+
        "q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, "+
        "q20, q21, q22, q23, q24) "
        + "VALUES (?,?,?,?,?,?,?,?," + //8개
        "?,?,?,?,?,?,?,?,?,?," + //q1~10개
        "?,?,?,?,?,?,?,?,?,?," + //q11~20
        "?,?,?,?" + ")"; //q21~24

    var date = require('../../utils/date')();

    poolAdapter.execute(query, [ //userIdx는 router에서 정의해줘야함
        _data.animalIdx, /*userIdx*/ 1, date, _data.adoptName, _data.position, _data.position2,
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
