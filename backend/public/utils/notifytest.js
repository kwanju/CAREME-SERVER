 var n = 0;
 //runCheckNewSchedule();
 window.onload = function () {
     if (window.Notification) {
         Notification.requestPermission();
     }
 }
 function checkNewSchedule() {
     var NEW_SCHEDULE_API_URL = 'http://localhost:3000/erp/notifytest/json/checkScheduleReadState';

     $.ajax({
         url: NEW_SCHEDULE_API_URL,
         data: null,
         type:"post",
         dataType:"json",
         success:function(result) {
             //console.log(result.schedule.length);
             if (result.schedule.length > 0) {
                 n = result.schedule.length;
                 document.getElementById('newSchedule').innerHTML = n + "개의 알림이 있습니다";
             }
             else
                 document.getElementById('newSchedule').innerHTML = "알림이 없습니다";
         },
         error: function(){
             console.log("에러(로그인하세요)");
         }
     });
 }
 function showNewSchedule() {
     var NEW_SCHEDULE_API_URL = 'http://localhost:3000/erp/notifytest/json/checkScheduleReadState';

     $.ajax({
         url: NEW_SCHEDULE_API_URL,
         data: null,
         type:"post",
         dataType:"json",
         success:function(result){
             console.log(result);
         },
         error: function(){
             console.log("에러");
         }
     });
 }
 function runCheckNewSchedule() {
     checkNewSchedule();
     setInterval(function () {
         checkNewSchedule();
     }, 5000);
 }