function showSubMenu() {
    var title = document.getElementsByClassName('title');
    var subMenu = document.getElementsByClassName('slide-submenu');
    for (let i = 1; i < title.length; i++) {
        title[i].onmouseover = function () {
            for (let j = 0; j < subMenu.length; j++) {
                subMenu[i - 1].className += " show";
            }
            title[i].onmouseout = function(){
                console.log("mouse out");
                for (let j = 0; j < subMenu.length; j++) {
                    subMenu[i-1].className= subMenu[i-1].className.replace(" show", "");
                }  
            }

        }
   
    }
var navTitle = document.getElementsByClassName('nav-title');
    var listShow = document.getElementsByClassName('par-list-show');
    debugger
    for(let i = 0;i<navTitle.length;i++){
        navTitle[i].onmouseover = function(){
            for(let j=0;j<listShow.length;j++){
                listShow[i].className+=" show";
            }
            navTitle[i].onmouseout = function(){
                for(let j=0;j<listShow.length;j++){
                    listShow[i].className=listShow[i].className.replace(' show',"");
                }
            }
        }
    }

}
window.onload = showSubMenu();