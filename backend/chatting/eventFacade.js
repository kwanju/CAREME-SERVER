var member = require('./member');
exports.getEvents = function (_socket) {
    member.participate(_socket);
}