var member = require('./member');
var message = require('./message');

exports.getEvents = function (_socket) {
    member.participate(_socket);
    message.getMessage(_socket);
}