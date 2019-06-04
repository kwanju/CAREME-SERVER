
exports.login = function (_id, _pw, _callback) {
    var login = require('./shelter/login');
    login.login(_id, _pw, _callback);
}

exports.checkDupId = function (_id, _callback) {
    var registration = require('./shelter/registration');
    registration.checkDupId(_id, _callback);
}

exports.registration = function (_data, _callback) {
    var r = require('./shelter/registration');
    r.registration(_data, _callback);
}

exports.writeBoard = function (_data, _callback) {
    var b = require('./bbs/bbs');
    b.writeBoard(_data, _callback);
}

exports.deleteBoard = function (_data, _callback) {
    var b = require('./bbs/bbs');
    b.deleteBoard(_data, _callback);
}

exports.getBbsList = function (_data, _callback) {
    var b = require('./bbs/bbs');
    b.getBbsList(_data, _callback);
}

exports.getPages = function (_callback) {
    var b = require('./bbs/bbs');
    b.getPages(_callback);
}

exports.getBb = function (_data, _callback) {
    var b = require('./bbs/bbs');
    b.getBb(_data, _callback);
}

exports.getUserSerialFromBb = function (_data, _callback) {
    var b = require('./bbs/bbs');
    b.getUserSerial(_data, _callback);
}

exports.getComments = function (_data, _callback) {
    var b = require('./bbs/bbs');
    b.getComments(_data, _callback);
}

exports.writeComment = function (_data, _callback) {
    var b = require('./bbs/bbs');
    b.writeComment(_data, _callback);
}

exports.searchShelterCategory = function (_data, _callback) {
    var shelter = require('./android/shelter');
    shelter.getShelterByCategory(_data, _callback);
}


//유기견 리스트, 등록, 삭제
exports.addAnimal = function (_data, _callback) {
    var animal = require('./erp/animal');
    animal.addAnimal(_data, _callback);
}

exports.deleteAnimal = function (_data, _callback) {
    var animal = require('./erp/animal');
    animal.deleteAnimal(_data, _callback);
}

exports.getAnimalList = function (_data, _callback) {
    var animal = require('./erp/animal');
    animal.getAnimalList(_data, _callback);
}

exports.getAnimalListPage = function (_data, _callback) {
    var animal = require('./erp/animal');
    animal.getAnimalListPage(_data, _callback);
}

exports.checkScheduleReadState = function (_data, _callback) {
    var schedule = require('./erp/schedule');
    schedule.checkScheduleReadState(_data, _callback);
}

exports.getAllShelterLocation = function (_callback) {
    var addr = require('./discover/map');
    addr.getAllShelterLocation(_callback);
}

exports.getScheduleListPermitted = function (_data, _callback) {
    var schedule = require('./erp/schedule');
    schedule.getScheduleListPermitted(_data, _callback);
};

exports.getScheduleListWaiting = function (_data, _callback) {
    var schedule = require('./erp/schedule');
    schedule.getScheduleListWaiting(_data, _callback);
};

exports.updateSheduleListNotRead = function (_data, _callback) {
    var schedule = require('./erp/schedule');
    schedule.updateScheduleListNotRead(_data, _callback);
}

exports.permitSchedule = function (_data, _callback) {
    var schedule = require('./erp/schedule');
    schedule.permitSchedule(_data, _callback);
}

exports.rejectSchedule = function (_data, _callback) {
    var schedule = require('./erp/schedule');
    schedule.rejectSchedule(_data, _callback)
}

exports.getAnimal = function (_data, _callback) {
    var animal = require('./erp/animal');
    animal.getAnimal(_data, _callback);
}

exports.updateAnimal = function (_data, _idx, _callback) {
    var animal = require('./erp/animal');
    animal.updateAnimal(_data, _idx, _callback);
}

exports.createDiscoverRequest = function (_data, _callback) {
    var create = require('./discover/discover');
    create.createDiscoverRequest(_data, _callback);
}

exports.checkDiscoverRequestReadState = function (_data, _callback) {
    var check = require('./discover/discover');
    check.checkDiscoverRequestReadState(_data, _callback);
}

exports.getPushInfoAboutSchedule = function (_data, _callback) {
    var schedule = require('./erp/schedule');
    schedule.getPushInfoAboutSchedule(_data, _callback);
};

exports.registerLocation = function (_data, _callback) {
    var registration = require('./shelter/registration');
    registration.registerLocation(_data, _callback)
}

exports.getShelter = function (_data, _callback) {
    var shelter = require('./erp/shelter');
    shelter.getShelter(_data, _callback);
}

exports.updateShelter = function (_data, _idx, _callback) {
    var shelter = require('./erp/shelter');
    shelter.updateShelter(_data, _idx, _callback);
}

exports.getAllDiscoverRequestInDiscover = function (_data, _callback) {
    var discover = require('./discover/discover');
    discover.getAllDiscoverRequestInDiscover(_data, _callback);
}

exports.getDiscoverRequestWaiting = function (_data, _callback) {
    var discover = require('./erp/discover');
    discover.getDiscoverRequestWaiting(_data, _callback)
};

exports.updatDiscoverRequestNotRead = function (_data, _callback) {
    var discover = require('./erp/discover')
    discover.updatDiscoverRequestNotRead(_data, _callback);
}

exports.getDiscoverRequestRecord = function (_data, _callback) {
    var discover = require('./erp/discover');
    discover.getDiscoverRequestRecord(_data, _callback)
}

exports.permitDiscoverRequest = function (_data, _callback) {
    var discover = require('./erp/discover');
    discover.permitDiscoverRequest(_data, _callback)
}

exports.updateDiscoverShelter = function (_data, _callback) {
    var discover = require('./erp/discover');
    discover.updateDiscoverShelter(_data, _callback)
}

exports.rejectDiscoverRequest = function (_data, _callback) {
    var discover = require('./erp/discover');
    discover.rejectDiscoverRequest(_data, _callback)
}

exports.getDiscoverFromDiscoverRequest = function (_data, _callback) {
    var discover = require('./erp/discover');
    discover.getDiscoverFromDiscoverRequest(_data, _callback)
}

exports.checkDiscoverRequestReadState = function (_data, _callback) {
    var discover = require('./erp/discover')
    discover.checkDiscoverRequestReadState(_data, _callback)
}

exports.getAppPushInfoWhenPermitDiscoverRequest = function (_data, _callback) {
    var discover = require('./erp/discover');
    discover.getAppPushInfoWhenPermitDiscoverRequest(_data, _callback);
}

exports.searchAnimalByName = function (_data, _callback) {
    var shelter = require('./erp/search');
    shelter.searchAnimalByName(_data, _callback);
}

exports.searchShelterByName = function (_data, _callback) {
    var shelter = require('./erp/search');
    shelter.searchShelterByName(_data, _callback);
}

exports.getDiscoverInfo = function (_data, _callback) {
    var discover = require('./erp/discover');
    discover.getDiscoverInfo(_data, _callback);
}

exports.getVolunteerInCalendar = function (_data, _callback) {
    var schedule = require('./erp/schedule');
    schedule.getVolunteerInCalendar(_data, _callback);
}

exports.getAnimalInCalendar = function (_data, _callback) {
    var schedule = require('./erp/schedule');
    schedule.getAnimalInCalendar(_data, _callback);
}

exports.getVolunteerToday = function (_data, _callback) {
    var schedule = require('./erp/schedule');
    schedule.getVolunteerToday(_data, _callback);
}

exports.getVolunteerName = function (_data, _callback) {
    var schedule = require('./erp/schedule');
    schedule.getVolunteerName(_data, _callback);
}

exports.getAlarmNumb = function (_data, _callback) {
    var schedule = require('./erp/schedule');
    schedule.getAlarmNumb(_data, _callback);
}

exports.addAdopt = function (_data, _callback) {
    var adopt = require('./erp/adopt');
    adopt.addAdopt(_data, _callback);
}

exports.userLogin = function (_data, _callback) {
    var adopt = require('./erp/adopt');
    adopt.userLogin(_data, _callback);
};

exports.getAdoptList = function (_data, _callback) {
    var adopt = require('./erp/adopt');
    adopt.getAdoptList(_data, _callback);
}

exports.getAdopt = function (_data, _callback) {
    var adopt = require('./erp/adopt');
    adopt.getAdopt(_data, _callback);
}

exports.permitAdopt = function (_data, _callback) {
    var adopt = require('./erp/adopt');
    adopt.permitAdopt(_data, _callback);
}

exports.rejectAdopt = function (_data, _callback) {
    var adopt = require('./erp/adopt');
    adopt.rejectAdopt(_data, _callback);
}

exports.getPermitAdoptList = function (_data, _callback) {
    var adopt = require('./erp/adopt');
    adopt.getPermitAdoptList(_data, _callback);
}

exports.saveMessage = function (_data, _callback) {
    var chat = require('./chat/chat');
    chat.saveMessage(_data, _callback);
}

exports.checkAdoptReadState = function (_data, _callback) {
    var adopt = require('./erp/adopt');
    adopt.checkAdoptReadState(_data, _callback);
}

exports.updateAdoptNotRead = function (_data, _callback) {
    var adopt = require('./erp/adopt');
    adopt.updateAdoptNotRead(_data, _callback);
}

exports.getNewChatList = function (_data, _callback) {
    var chat = require('./erp/chat');
    chat.getNewChatList(_data, _callback);
}

exports.getChatList = function (_data, _callback) {
    var chat = require('./erp/chat');
    chat.getChatList(_data, _callback);
}

exports.getChat = function (_data, _callback) {
    var chat = require('./erp/chat');
    chat.getChat(_data, _callback);
}

exports.getScheduleDate = function (_data, _callback) {
    var date = require('./erp/chart');
    date.getScheduleDate(_data, _callback);
}

exports.getAdoptDate = function (_data, _callback) {
    var date = require('./erp/chart');
    date.getAdoptDate(_data, _callback);
}

exports.getDiscoverDate = function (_data, _callback) {
    var date = require('./erp/chart');
    date.getDiscoverDate(_data, _callback);
}