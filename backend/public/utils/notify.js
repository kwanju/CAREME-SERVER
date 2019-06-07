var n = 0;
// 현재 실행은 commonHead에서 로그인이 되었을 때 실행함.
window.onload = function () {
    if (window.Notification) {
        Notification.requestPermission();
    }
}
function checkNewSchedule() {
    var NEW_SCHEDULE_API_URL = '/erp/notify/json/checkReadState';

    $.ajax({
        url: NEW_SCHEDULE_API_URL,
        data: null,
        type: "post",
        dataType: "json",
        success: function (result) {
            //console.log(result.schedule.length);
            if (result.schedule.length > 0) {
                n = result.schedule.length;
                setScheduleBadge(n);
            } else
                setScheduleBadge(0);
                
            if(result.discoverRequest.length>0)
                setDiscoverRequestBadge(result.discoverRequest.length)
            else    
                setDiscoverRequestBadge(0)
            
            if(result.adopt.length>0)
                setAdoptBadge(result.adopt.length)
            else    
                setAdoptBadge(0)

            if(result.chat.length>0)
                setChatBadge(result.chat.length)
            else
                setChatBadge(0)


        },
        error: function () {
            console.log("에러(로그인하세요)");
        }
    });
}

function runCheckNewSchedule() {
    checkNewSchedule();
    setInterval(function () {
        checkNewSchedule();
    }, 5000);
}

function setScheduleBadge(_number) {

    var badge = $('#side_menu_badge')
    if (badge.length == 0)
        return;

    if (_number == 0) 
        badge.html("");
    else 
        badge.html(_number);    
    
}

function setDiscoverRequestBadge(_number) {

    var badge = $('#side_menu_discover_request_badge')
    if (badge.length == 0)
        return;

    if (_number == 0) 
        badge.html("");
     else 
        badge.html(_number);
}

function setAdoptBadge(_number){
    
    var badge = $('#side_menu_adopt_badge')
    if (badge.length == 0)
        return;

    if (_number == 0) 
        badge.html("");
     else 
        badge.html(_number);
}

function setChatBadge(_number){
    var badge = $('#chat_badge');
    if (badge.length == 0)
        return;

    if (_number == 0) {
        badge.html("");
        if(badge.hasClass('notify-number'))
            badge.removeClass('notify-number');
    }
    else {
        badge.html(_number);
        if(!badge.hasClass('notify-number'))
            badge.addClass('notify-number')
    }
}

    /*
        if($('#sidemenu_icon_volunteer').length==0)
            return;
        var marker = $('#schedule_marker');
    
    
        if (marker.length == 0) {
            if (_number == 0)
                return;
            marker = document.createElement('span');
            marker.innerHTML = _number;
            marker.classList.add('marker');
            marker.id = "schedule_marker";
            document.body.appendChild(marker);
    
            var span = $("#sidemenu_icon_volunteer");
            var pos = span.offset()
            pos.left += span.width();
            var b = $('.marker')
            $(b[0]).css(pos)
        } else {
            if (_number == 0) {
                marker.remove();
                return;
            }
            marker.html(_number);
        }
    
    */


