function banner(){

    var li = document.getElementById('banner').getElementsByTagName('li');
    var num = 0;
    var len=li.length;
    setInterval(function(){
    li[num].style.display='none';
    num=++num==len?0:num;
    li[num].style.display='inline-block';
    },500);
}
window.onload = banner();