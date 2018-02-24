function openNav(){
    document.getElementById("mySlidenav").style.width="250px";//设置侧边栏宽度
    document.getElementById("main").style.marginLeft="250px";//主题左边距
    document.body.style.backgroundColor="rgba(0,0,0,0.4)";//背景色
    //全屏幕侧边栏
    // document.getElementById("mySlidenav").style.width="100%"; 
}
function closeNav(){
    document.getElementById("mySlidenav").style.width="0";
    document.getElementById("main").style.marginLeft="0";
    document.body.style.backgroundColor="white";
}