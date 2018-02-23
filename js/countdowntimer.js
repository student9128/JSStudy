var countDownDate = new Date("Jan 5,2028 15:37:25").getTime();
var x= setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance/(1000*60*60*24));
    var hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((distance%(1000*60*60))/(1000*60));
    var seconds=Math.floor((distance%(1000*60))/1000);
    document.getElementById('demo').innerHTML = days+"天 "+hours+"小时 "+minutes+"分钟 "+seconds+"秒";
    if(distance<0){
        clearInterval(x);
        document.getElementById('demo').innerHTML = "EXPIRED";
    }
},1000);